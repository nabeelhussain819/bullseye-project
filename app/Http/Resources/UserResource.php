<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'cell_number_primary' => $this->cell_number_primary,
            'cell_number_secondary' => $this->cell_number_secondary,
            'city' => $this->city,
            'gender' => $this->gender,
            'qualification' => $this->qualification,
            'occupation' => $this->occupation,
            'designation' => $this->designation,
            'chief_earner' => $this->chief_earner,
            'chief_earner_qualification' => $this->chief_earner_qualification,
            'chief_earner_designation' => $this->chief_earner_designation,
            'created_at' => $this->created_at->diffForHumans()
        ];
    }
}
