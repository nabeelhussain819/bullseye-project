<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClaimResource extends JsonResource
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
            'status' => $this->status->name,
            'user' => $this->user->name,
            'survey_url' => $this->survey->url,
            'survey_name' => $this->survey->name,
            'status_id' => $this->status_id,
            'created_at' => $this->created_at->format('d/M/Y')
        ];
    }
}
