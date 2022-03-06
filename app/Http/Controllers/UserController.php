<?php

namespace App\Http\Controllers;

use App\Helpers\Common;
use App\Models\Claim;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = User::select([
            'id',
            'name',
            'email',
            'cell_number_primary',
            'cell_number_secondary',
            'created_at'
            ])->findOrFail($id);
      
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Gets the specified resource from storage with claims
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getUserDetails($id)
    {
		  $claims = Claim::with('survey','status')
		  				->where('user_id', $id)
						->get()
						->map(function($claim){
							return [
								'id' => $claim->id,
								'survey_name' => $claim->survey->name,
								'survey_url' => $claim->survey->url,
								'survey_description' => $claim->survey->description,
								'status_of_claim' => $claim->status->name,
								'approved_by' => $claim->acceptedBy->name
							];
						});

        return $claims;
    }

}
