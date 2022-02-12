<?php

namespace App\Observers;

use App\Models\Survey;

class SurveyObserver
{
    public function creating(Survey $survey)
    {

        $survey->active = true;
        Survey::where("active", true)->update([
            'active' => false
        ]);
    }

    public function updating(Survey $survey)
    {
        // this will only run if reactive the old survey
        if ($survey->isDirty('active')) {
            Survey::where("active", true)->update([
                'active' => false
            ]);
        }
    }
}
