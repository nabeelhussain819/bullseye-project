<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Common;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Otp;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    //

    public function register(Request $request)
    {
       
        $validate = $this->validator($request->all());

        if($validate->fails())
        {
            return Common::sendError('Wrong Crendentials', $validate->errors());
        }
      
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $otpPin = Otp::createPin();
        $otp = Otp::createOtp($user, Otp::REGISTRATION_OTP, $otpPin);
    
        $success['token'] =  $user->createToken('token')->accessToken;
        $success['name'] =  $user->name;
        $success['otp_message'] = "An Otp has been generated.";
        $success['otp_pin'] = $otpPin;
 
        return Common::sendResponse($success, 'User register successfully.');
    }

    
    protected function validator(array $data)
    {
        return Validator::make($data,[
            'name' => ['required', 'string', 'max:255'],
            'cell_number_primary' => ['required', 'numeric', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8',]
        ]);
    }
}
