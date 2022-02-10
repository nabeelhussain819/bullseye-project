<?php

namespace App\Exceptions;

use App\Helpers\App;
use Exception;
use Illuminate\Http\Request;
use Throwable;

class BaseException extends Exception
{
    /**
     * Additional information set using this attribute.
     * @var array
     */
    protected $additionalParams = [];
    public $errors = [];

    public function render(Request $request, Throwable $throwable = null)
    {
        if ($request->expectsJson() || $request->is('api/*')) {
            $response = [
                'success' => false,
                'error' => $this->code,
                'message' => $this->message,
                'params' => $this->additionalParams,
                'errors' => $this->errors,
            ];
            return response()->json($response, $this->getExceptionCode());
        }

        return response()->view(
            'errors.illustrated-layout',
            [
                'code' => $this->getExceptionCode(),
                'message' => $this->message
            ],
            $this->getExceptionCode()
        );
    }

    private function getExceptionCode(): int
    {
        if ($this->code > 99 && $this->code < 599) {
            return $this->code;
        }

        return 500;
    }
}
