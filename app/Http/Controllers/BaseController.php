<?php

namespace App\Http\Controllers;

use App\Helpers\Common;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    //
    public $common;

    public function __construct()
    {   
        $this->common = Common::class;
    }
}
