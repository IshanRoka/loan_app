<?php

namespace App\Http\Controllers\frontpanel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\BackPanel\AboutUs;
use App\Models\BackPanel\Event;
use App\Models\BackPanel\History;
use App\Models\BackPanel\Program;
use App\Models\BackPanel\SiteSetting;
use App\Models\BackPanel\MessageFrom;
use App\Models\BackPanel\Notice;
use App\Models\Loan;
use Exception;

use Carbon\Carbon;

use Illuminate\Database\QueryException;

class HomeController extends Controller
{
    public function login()
    {
        return view('api.login');
    }

    public function index(Request $request)
    {
        return view('api.form');
    }

    public function dashboard()
    {
        try {
            $status = true;
            $message = 'Loan applications retrieved successfully!';
            $allLoans = Loan::with('user')->paginate(7);
            $data = [
                'status' =>  $status,
                'message' => $message,
                'allLoans' => $allLoans
            ];
        } catch (QueryException $e) {
            $data['type'] = 'error';
            $data['message'] = $this->queryMessage;
        } catch (Exception $e) {
            $data['type'] = 'error';
            $data['message'] = $e->getMessage();
        }
        return view('api.dashbaord', $data);
    }
}
