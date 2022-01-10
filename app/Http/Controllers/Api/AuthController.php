<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;

class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'cell_number_primary' => 'required|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
      
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('token')->accessToken;
        $success['name'] =  $user->name;

 
        return $this->sendResponse($success, 'User register successfully.');
    }
 
    /**
     * Login
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('token')->accessToken; 
            $success['name'] =  $user->name;
            return $this->sendResponse($success, 'User logged in successfully.');

        } else {
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }   

}
