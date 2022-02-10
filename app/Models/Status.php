<?php

namespace App\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $alias
 * @property string $color_code
 * @property string $created_at
 * @property string $updated_at
 * @property Claim[] $claims
 */
class Status extends BaseModel
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
    protected $fillable = ['name', 'alias', 'color_code', 'created_at', 'updated_at'];

    const
        STATUS_CONFIRMED_ID = 1,
        STATUS_APPROVED_ID = 2,
        NEW_REQUEST_ID = 3,
        STATUS_DECLINED_ID = 4;

    public static $DEFAULT_STATUSES = [
        ['id' => Status::STATUS_CONFIRMED_ID, 'name' => 'CONFIRMED', 'alias' => 'CONFIRMED', 'color_code' => '#567a0d'],
        ['id' => Status::STATUS_APPROVED_ID, 'name' => 'APPROVED', 'alias' => 'APPROVED', 'color_code' => '#567a0d'],
        ['id' => Status::NEW_REQUEST_ID, 'name' => 'NEW REQUEST', 'alias' => 'NEW_REQUEST', 'color_code' => '#567a0d'],
        ['id' => Status::STATUS_DECLINED_ID, 'name' => 'DECLINED', 'alias' => 'DECLINED', 'color_code' => '#567a0d']
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function claims()
    {
        return $this->hasMany('App\Models\Claim');
    }

    public static function getDefaultId(): array
    {
        return [Status::STATUS_CONFIRMED_ID, Status::STATUS_APPROVED_ID, Status::NEW_REQUEST_ID, Status::STATUS_DECLINED_ID];
    }
}
