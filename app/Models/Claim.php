<?php

namespace App\Models;

use App\Observers\ClaimObservers;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $user_id
 * @property integer $survey_id
 * @property integer $status_id
 * @property boolean $is_accepted
 * @property integer $accepted_by
 * @property integer $accepted_at
 * @property string $created_at
 * @property string $updated_at
 * @property User $user
 * @property Survey $survey
 * @property Status $status
 */
class Claim extends Model
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
    protected $fillable = ['user_id', 'survey_id', 'status_id', 'is_accepted', 'accepted_by', 'accepted_at', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function survey()
    {
        return $this->belongsTo('App\Models\Survey');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function status()
    {
        return $this->belongsTo('App\Models\Status');
    }
    public static function boot()
    {
        parent::boot();

        Claim::observe(ClaimObservers::class);
    }
}
