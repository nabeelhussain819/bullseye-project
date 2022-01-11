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
        
        if(\Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = \Auth::user(); 
            $success['token'] =  $user->createToken('token')->accessToken; 
            $success['name'] =  $user->name;
            return Common::sendResponse($success, 'User logged in successfully.');

        } else {
            return Common::sendError('Your login credentials are incorrect', ['error'=>'Unauthorised']);
        }
    }

    protected function validator(array $data)
    {
        return Validator::make($data,[
            'email' => 'required',
            'password' => 'required'
        ]);
    }
}
