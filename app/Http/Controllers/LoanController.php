<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\loanapplyrequest;
use App\Http\Requests\StatusRequest;
use Exception;;

use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class LoanController extends Controller
{

    public function dashboard()
    {
        try {
            $status = true;
            $message = 'Loan applications retrieved successfully!';
            $loans = Loan::with('user')->get();
            $data = [
                'status' =>  $status,
                'message' => $message,
                'loans' => $loans
            ];
        } catch (QueryException $e) {
            $data['type'] = 'error';
            $data['message'] = $this->queryMessage;
        } catch (Exception $e) {
            $data['type'] = 'error';
            $data['message'] = $e->getMessage();
        }
        return response()->json($data);
    }


    public function apply(loanapplyrequest $request)
    {
        try {
            $post = $request->all();
            $type = 'success';
            $message = 'Loan application submitted successfully!';
            DB::beginTransaction();
            $result = Loan::applyLoan($post);
            if (!$result) {
                throw new Exception("Couldn't submmit loan application", 1);
            }
            DB::commit();
        } catch (ValidationException $e) {
            $type = 'error';
            $message = $e->getMessage();
        } catch (QueryException $e) {
            DB::rollBack();
            $type = 'error';
            $message = $this->queryMessage;
        } catch (Exception $e) {
            DB::rollBack();
            $type = 'error';
            $message = $e->getMessage();
        }
        return response()->json(['type' => $type, 'message' => $message], 201);
    }


    public function index()
    {
        try {
            $message = 'Loan applications retrieved successfully!';
            $loans = Loan::with('user')->where('user_id', Auth::user()->id)->get();
            $data = [
                'message' => $message,
                'loans' => $loans,
            ];
            if ($loans->isEmpty()) {
                $data['message'] = 'No loan applications found.';
            }
        } catch (QueryException $e) {
            $data['type'] = 'error';
            $data['message'] = 'Database error occurred: ' . $e->getMessage();
        } catch (Exception $e) {
            $data['type'] = 'error';
            $data['message'] = 'An error occurred: ' . $e->getMessage();
        }
        return response()->json($data, 200);
    }


    public function updateStatus(StatusRequest $request, $id)
    {
        try {
            $post = $request->all();
            $type = 'success';
            $message = "Loan status updated successfully";

            DB::beginTransaction();
            $result = Loan::updateApplication($post, $id);

            if (!$result) {
                throw new Exception('Could not save record', 200);
            }

            DB::commit();
        } catch (ValidationException $e) {
            $type = 'error';
            $message = $e->getMessage();
        } catch (QueryException $e) {
            DB::rollBack();
            $type = 'error';
            $message = $this->queryMessage;
        } catch (Exception $e) {
            DB::rollBack();
            $type = 'error';
            $message = $e->getMessage();
        }
        return response()->json(['type' => $type, 'message' => $message], 200);
    }
}
