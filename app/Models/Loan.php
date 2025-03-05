<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Common;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Str;


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


    // public static function myInfo($post)
    // {
    //     try {
    //         $get = $post;


    //         foreach ($get['columns'] as $key => $value) {
    //             $get['columns'][$key]['search']['value'] = trim(strtolower(htmlspecialchars($value['search']['value'], ENT_QUOTES)));
    //         }

    //         $cond = '';

    //         if ($get['columns'][1]['search']['value'])
    //             $cond .= " and lower(name) like '%" . $get['columns'][1]['search']['value'] . "%'";

    //         $limit = 15;
    //         $offset = 0;
    //         if (!empty($get["length"]) && $get["length"]) {
    //             $limit = $get['length'];
    //             $offset = $get["start"];
    //         }

    //         $query = Loan::selectRaw("(SELECT count(*) FROM loans WHERE {$cond}) AS totalrecs, id,amount,status,user")
    //             ->whereRaw($cond);

    //         $orderby = $query->orderBy("id", "ASC");


    //         if ($limit > -1) {
    //             $result = $query->orderByRaw($orderby)->offset($offset)->limit($limit)->get();
    //         } else {
    //             $result = $query->orderByRaw($orderby)->get();
    //         }
    //         if ($result) {
    //             $ndata = $result;
    //             $ndata['totalrecs'] = @$result[0]->totalrecs ? $result[0]->totalrecs : 0;
    //             $ndata['totalfilteredrecs'] = @$result[0]->totalrecs ? $result[0]->totalrecs : 0;
    //         } else {
    //             $ndata = array();
    //         }

    //         return $ndata;
    //     } catch (Exception $e) {
    //         throw $e;
    //     }
    // }

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