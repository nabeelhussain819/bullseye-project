<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Common;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $validate = $this->validator($request->all());

        if($validate->fails())
        {
            return Common::sendError('Please fill the required fields.', $validate->errors());
        }


        if(\Auth::attempt(['cell_number_primary' => $request->cell_number_primary, 'password' => $request->password, 'otp_verified' => true])){ 
            $user = \Auth::user(); 
            $success['token'] =  $user->createToken('token')->accessToken; 
            $success['name'] =  $user->name;
            return Common::sendResponse($success, 'User logged in successfully.');
        }
        else
        {
            return Common::sendError('Your login credentials are incorrect', ['error'=>'Unauthorised', 'otp' => 'Otp is not verified']);
        }
       
    }

    protected function validator(array $data)
    {
        return Validator::make($data,[
            'cell_number_primary' => 'required',
            'password' => 'required'
        ]);
    }
}
