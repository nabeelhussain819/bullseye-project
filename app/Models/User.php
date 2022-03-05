<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public const VERIFIED = 1;
    public const NOT_VERIFIED = 0;
    public const ADMIN = 1;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'cell_number_primary',
        'cell_number_secondary',
        'cnic',
        'city',
        'gender',
        'qualification',
        'occupation',
        'designation',
        'password',
        'chief_earner',
        'chief_earner_qualification',
        'chief_earner_occupation',
        'chief_earner_designation',
        'otp_verified',
        'is_admin'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:d/M/Y',
        'otp_verified_at' => 'datetime'
    ];

    public function otp()
    {
        return $this->hasOne(Otp::class, 'user_id');
    }

    public function claims()
    {
        return $this->hasMany(Claim::class, 'user_id');
    }

    static function generateOtp($user, $otpType = Otp::REGISTRATION_OTP)
    {
        $otpPin = Otp::createPin();
        $user->otp()->delete();
        Otp::createOtp($user, $otpType, $otpPin);
    }


    public function scopeVerified($query)
    {
        $query->where('otp_verified', self::VERIFIED);
    }

    public function isAdmin()
    {
        auth()->user()->is_admin == self::ADMIN ? true : false;
    }

    public static function id()
    {
        return Auth::user()->id;
    }
}
