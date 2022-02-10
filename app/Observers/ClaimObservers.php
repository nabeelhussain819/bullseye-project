<?php

namespace App\Observers;

use App\Models\Claim;
use App\Models\Status;
use App\Models\Survey;
use Illuminate\Support\Facades\Auth;

class ClaimObservers
{
    public function creating(Claim $claim)
    {

        $claim->user_id = Auth::user()->id;
        $claim->survey_id = Survey::getActiveSurveyId();
        $claim->status_id = Status::NEW_REQUEST_ID;
        
    }
}
