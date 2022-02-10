<?php

namespace App\Exceptions;

use Exception;

class ApiException extends BaseException
{
    public function __construct($message, $code = 500, \Throwable $previous = null)
    {
        $this->code = $code;
        $this->message = $message;
    }
}
