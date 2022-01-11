<?php

namespace App\Core;

class SmsCurl{

    public const API_URL = "";

    //currently not in use
    public function local($recipientNumber, $message, $id)
    {
        $username = $this->user;///Your Username
        $password = $this->password;///Your Password
        $mobile = intval($recipientNumber);///Recepient Mobile Number
        $sender = $id;

        $post = "sender=" . urlencode($sender) . "&mobile=" . urlencode($mobile) . "&message=" . urlencode($message) . "";
        $url = self::API_URL . $username . "&password=" . $password . "";
        $ch = curl_init();
        $timeout = 10; // set to zero for no timeout
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)');
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $result = curl_exec($ch);
        /*Print Responce*/

        return $this->isSuccess($result);
    }

    /**
     * @param $result
     * @return bool
     */
    private function isSuccess($result): bool
    {
        return str_contains($result, 'OK');
    }

}