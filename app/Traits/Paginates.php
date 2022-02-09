<?php

namespace App\Traits;

trait Paginates
{
    protected $pageSize = 50;
    protected $pageSize_homepage = 25;
    protected $pageSize_reports = 100;

    public function getPageSize(): int
    {

        return request()->get('pageSize', $this->pageSize);
    }

    public function getPageSize_homepage(): int
    {

        return request()->get('pageSize', $this->pageSize_homepage);
    }

    public function getPageSize_reports(): int
    {
        return request()->get('results', $this->pageSize_reports);
    }
}