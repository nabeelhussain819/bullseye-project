<?php

namespace App\Http\Controllers;

use App\Helpers\ArrayHelper;
use App\Models\FirebaseToken;
use App\Traits\InteractWithFirebase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FirebaseController extends Controller
{
    use InteractWithFirebase;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function store(Request $request)
    {
        $userId = Auth::user()->id;
        $data = ArrayHelper::merge(['user_id' => $userId], $request->all());

        FirebaseToken::updateOrCreate(
            ['user_id' => $userId, 'device_id' => $request->get('device_id')],
            $data
        );

        return $this->genericResponse(true, 'Token Added Successfully');
    }

    public function sendNotification(Request $request)
    {
        return $this->send_notification(Auth::user()->id, "body", "title");
    }

}
