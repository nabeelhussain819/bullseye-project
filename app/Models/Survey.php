<?php

namespace App\Models;

use App\Exceptions\ApiException;
use App\Observers\ClaimObservers;
use App\Observers\SurveyObserver;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $url
 * @property string $description
 * @property int $claims_count
 * @property boolean $active
 * @property integer $created_by
 * @property integer $updated_by
 * @property string $created_at
 * @property string $updated_at
 * @property Claim[] $claims
 */
class Survey extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['name', 'url', 'description', 'claims_count', 'active', 'created_by', 'updated_by', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function claims()
    {
        return $this->hasMany('App\Models\Claim');
    }

    public static function getActiveSurveyId(): int
    {
        $survey = Survey::where('active', true)->first();
        if (empty($survey)) {
            throw new ApiException("No Active survey found");
        }
        return $survey->id;
    }

    public static function boot()
    {
        parent::boot();

        Claim::observe(SurveyObserver::class);
    }


    public static function current(): ?Survey
    {
        return Survey::where('active', true)->first();
    }

}
