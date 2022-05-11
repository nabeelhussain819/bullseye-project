<?php

namespace App\Http\Controllers;

use App\Helpers\Common;
use App\Models\Claim;
use App\Models\Status;
use App\Models\Survey;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }


    public function getCounts()
    {
        $count = [
            'consumers' => User::removeAdmin()->count(),
            'surveys' => Survey::all()->count(),
            'claims' => Claim::all()->count(),
            'rejected_claims' => Claim::Stats(Status::STATUS_DECLINED_ID)->count(),
            'pending_claims' => Claim::Stats(Status::NEW_REQUEST_ID)->count(),
            'approved_claims' => Claim::Stats(Status::STATUS_APPROVED_ID)->count()
        ];
        
        return Common::sendResponse($count, 'Success');
    }

}
