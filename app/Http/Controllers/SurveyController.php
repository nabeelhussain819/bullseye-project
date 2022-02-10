<?php

namespace App\Http\Controllers;

use App\Helpers\Common;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SurveyController extends Controller
{
    private $model;

    /**
     * Constructor
     *
     *
     */


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Survey::paginate($this->pageSize);
        // continue work from herer
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return DB::transaction(function () use ($request) {
            return Survey::create($request->all());
        });

//        $validate = $this->validator($request->all());
//
//        if ($validate->fails()) {
//            return Common::sendError('Some Error Occured', $validate->errors());
//        }
//
//        $survey = $this->model::create([
//            'title' => $request->get('title'),
//            'description' => $request->get('description')
//        ]);
//
//        return Common::sendResponse($survey, 'Successfully Added !');
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Survey $survey
     * @return \Illuminate\Http\Response
     */
    public function show(Survey $survey)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Survey $survey
     * @return \Illuminate\Http\Response
     */
    public function edit(Survey $survey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Survey $survey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Survey $survey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Survey $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Survey $survey)
    {
        //
    }

    public function validator(array $data)
    {
        return Validator::make($data, [
            'title' => 'required|string',
            'description' => 'sometimes|string',
        ]);
    }
}
