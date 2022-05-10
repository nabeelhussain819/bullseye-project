<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Claim;
use App\Models\Survey;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class ClaimController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return  array
     */
    public function index(Request $request)
    {
        // The data set is requirement of mobile app developer for there easy of use
        $claims = Claim::where($this->applyFilters($request))
            ->with('survey', function (BelongsTo $belongsTo) {
                $belongsTo->select(['id', 'name']);
            })
            ->with('status', function (BelongsTo $belongsTo) {
                $belongsTo->select(['id', 'name']);
            })
            ->where('user_id', Auth::user()->id)
            ->get()
            ->map(function (Claim $claim) {
                $claim->surveyName = $claim->survey->name;
                $claim->statusName = $claim->status->name;
                return $claim;
            });
        return ['data' => $claims];
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
        Claim::create();
        return $this->genericResponse(true, "your claim has been posted");

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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

    public function statistics(Request $request)
    {
        //return Claim::statistics(); make on real data
        return [
            'total'          => Claim::totalClaims(),
            'pending'        => Claim::Pending()->count(),
            'completed'      => Claim::Completed()->count(),
            'rejected'       => Claim::Rejected()->count(),
            'approved'       => Claim::Approved()->count(),
            'current_survey' => Survey::currentWIthClaimDetail()
        ];
    }
}
