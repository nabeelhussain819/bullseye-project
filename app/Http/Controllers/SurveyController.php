<?php

namespace App\Http\Controllers;

use App\Helpers\Common;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SurveyController extends Controller
{
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
        $survey =  DB::transaction(function () use ($request) {
            return Survey::create([
                'name' => $request->name,
                'description' => $request->description,
                'url' => $request->url,
            ]);
        });
     
        return Common::sendResponse($survey, 'Successfully Added !');
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
    public function update(Request $request)
    {
        //
        $survey = Survey::findOrFail($request->id);
        $survey->update([
            'active' => true,
        ]);
        return Common::sendResponse([],'Successfully Updated Status');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Survey $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $survey = Survey::with('claims')->findOrFail($request->id);
        if($survey->claims->count() > 0)
        {
            return Common::sendResponse([], 'Cannot Delete survey because it has claims');   
        }
        return Common::sendResponse([],'Successfully deleted Survey');
    }

    public function validator(array $data)
    {
        return Validator::make($data, [
            'title' => 'required|string',
            'description' => 'sometimes|string',
        ]);
    }
    
    
}
