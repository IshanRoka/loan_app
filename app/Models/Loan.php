<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Exception;


class Loan extends Model
{
    use HasFactory;



    protected $fillable = [
        'user_id',
        'amount',
        'status',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public static function applyLoan($post)
    {
        try {
            $dataArray = [
                'amount' => $post['amount'],
                'user_id' => auth()->check() ? auth()->user()->id : null,
            ];

            $dataArray['created_at'] = Carbon::now();
            if (!Loan::insert($dataArray)) {
                throw new Exception("Couldn't submmit loan application", 1);
            }
            return true;
        } catch (Exception $e) {
            throw $e;
        }
    }


    public static function updateApplication($post, $id)
    {
        try {
            $dataArray = [
                'status' => $post['status'],
            ];


            $dataArray['updated_at'] = Carbon::now();
            if (!Loan::where('id', $id)->update($dataArray)) {
                throw new Exception("Couldn't update Status", 1);
            }

            return true;
        } catch (Exception $e) {
            throw $e;
        }
    }
}
