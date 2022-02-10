<?php

namespace App\Observers;

use App\Models\Survey;

class SurveyObserver
{
    public function creating(Survey $survey)
    {
        Survey::update([
            'active' => false
        ]);
    }

    public function updating(Survey $survey)
    {
        Survey::where('id', '!=', $survey->id)->update([
            'active' => false
        ]);
    }
}
