<?php

namespace App\Traits;

use App\Http\Controllers\Controller;
use App\Model\FirebaseToken;
use PHPUnit\Exception;

trait InteractWithFirebase
{
    public function send_notification_curl(array $registatoin_ids, $notification, $data = [])
    {
        $url = 'https://fcm.googleapis.com/fcm/send';
        $fields = [
            'to' => implode($registatoin_ids),
            'notification' => $notification,
            'data' => $data
        ];
        // Firebase API Key
        $SERVER_API_KEY = 'AAAAdNw7qnw:APA91bE9TbOsn2GInTRuc7a2nqsAh6Nfx9GnBBJUaL5-S-TICQYQMgx2OCyQ7vuMWzY97v02R63LrgAAia1NJTb8AdI6IRkPBj85EB-U9BZ0QV53DRs3vodj_8wS16vRtXlfuBUYdAX1';

        $headers = array("Authorization:key=" . $SERVER_API_KEY, 'Content-Type:application/json');

        // Open connection
        $ch = curl_init();
        // Set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // Disabling SSL Certificate support temporarly
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        if ($result === FALSE) {
            die('Curl failed: ' . curl_error($ch));
        }
        curl_close($ch);

        return $result;
    }

    public function send_notification($userId, $body, $title, $data = [])
    {
        FirebaseToken::where("user_id", $userId)->each(function (FirebaseToken $firebaseToken) use ($body, $title, $data) {

            $arrNotification = [];
            $arrNotification["body"] = $body;
            $arrNotification["title"] = $title;
            $arrNotification["sound"] = "default";
            $arrNotification["type"] = 1;
            $res = $this->send_notification_curl([$firebaseToken->token], $arrNotification, $data);
            try {
                $r = json_decode($res);

                if ($r->failure) {
                    $firebaseToken->delete();
                }
            } catch (Exception $e) {
            }
        });
    }
}
