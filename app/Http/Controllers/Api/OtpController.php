<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Common;
use App\Http\Controllers\Controller;
use App\Models\Otp;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OtpController extends Controller
{
    //

    public function verification(Request $request)
    {

        $userWithOtp = Otp::where('otp', $request->get('otp'))->whereNull('used_at')->first();
        if(!empty($userWithOtp))
        {
            $userWithOtp->update(['used_at' => Carbon::now()]);
            
            User::find($userWithOtp->user_id)->update([
                'otp_verified' => true
            ]);

            $data['message'] = 'Your Otp has been verified. You can now login';

            return Common::sendResponse($data, 'Otp Verification Successfull');
        }

    
        return Common::sendError('Otp verification failed.', []);

    }
}
