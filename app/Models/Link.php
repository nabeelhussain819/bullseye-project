<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    use HasFactory;

    const EXPIRED = '0';
    const NOT_EXPIRED = '1';

    
    protected $fillable = [
        'name',
        'expired'
    ];

    public static function boot()
    {
        parent::boot();
        
        static::creating(function($model){
            $model->orderBy('id','desc')->update([
                'expired' => self::EXPIRED
            ]);
        });
    }


}
