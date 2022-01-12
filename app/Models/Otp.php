<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    use HasFactory;

    public const REGISTRATION_OTP = 1;
    public const FORGET_OTP = 1;

    protected $fillable = [
        'user_id', 'otp', 'type_id','used_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    /**
     * @param int $digits
     * @return int
     */
    public static function createPin($digits = 4): int
    {
        return intval(str_pad(rand(0, pow(10, $digits) - 1), $digits, '0', STR_PAD_LEFT));
    }

    /**
     * @param User $user
     * @param $typeId
     * @param $otp
     * @return mixed
     */
    public static function createOtp(User $user, $typeId, $otp)
    {
        return self::create([
            'user_id' => $user->id,
            'type_id' => $typeId,
            'otp' => $otp,
        ]);
    }

}
