<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Common;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Otp;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\MessageBag;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        return DB::transaction(function () use ($request) {
            $validate = $this->validator($request->all());

            if ($validate->fails()) {
//
                $firstError = 'Wrong Credentials';
                // hot fix for mobile developer
                collect($validate->errors())->each(function ($error) use (&$firstError) {
                    if (isset($error)) {
                        $firstError = $error[0];
                    }
                });

                return Common::sendError($firstError, $validate->errors());
            }

            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);

            // $otpPin = Otp::createPin(); hot fix as sms not implemented (should be handle by env)
            $otpPin = 1234;
            $otp = Otp::createOtp($user, Otp::REGISTRATION_OTP, $otpPin);

            $success['token'] = $user->createToken('token')->accessToken;
            $success['name'] = $user->name;
            $success['otp_message'] = "An Otp has been generated.";
            $success['otp_pin'] = $otpPin;

            return Common::sendResponse($success, 'User register successfully.');
        });
    }


    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'cell_number_primary' => ['required', 'numeric', 'unique:users'],
//            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8',]
        ]);
    }
}
