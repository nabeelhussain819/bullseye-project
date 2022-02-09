<?php

namespace App\Traits;

use App\Helpers\ArrayHelper;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait AppliesQueryParams
{
    public function applyFilters(Request &$request): callable
    {
        return function (Builder $query) use (&$request) {
            $query->when($request->get('id'), function (Builder $query, $id) {

                if (ArrayHelper::isArray($id)) {

                    return $query->whereIn('id', $id);
                }
                return $query->where('id', (int)$id);
            });
        };
    }
}
