<?php

namespace App\Observers;

use App\Exceptions\ApiException;
use App\Models\Claim;
use App\Models\Status;
use App\Models\Survey;
use Illuminate\Support\Facades\Auth;

class ClaimObservers
{
    public function creating(Claim $claim)
    {
        $surveyId = Survey::getActiveSurveyId();
        $allReadyClaim = Claim::alreadyClaim($surveyId);
        if (empty($allReadyClaim)) {
            $claim->user_id = Auth::user()->id;
            $claim->survey_id = $surveyId;
            $claim->status_id = Status::NEW_REQUEST_ID;
        } else {
            throw new ApiException("already applies on the survey");
        }


    }


}
