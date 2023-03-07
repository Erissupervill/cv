<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //all Request came from app/https/requests
    public function signup(SignupRequest $request){
        $data = $request -> validated();
        $user = User::create([
            'name'=> $data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password'])
        ]);
        $user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }

    public function login(LoginRequest $request){
        
    }

    public function logout(Request $request){
        
    }
}
