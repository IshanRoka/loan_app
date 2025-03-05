<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class loanapplyrequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'amount' => 'required|numeric|min:1000',

        ];

        return $rules;
    }

    public function messages(): array
    {
        return [
            'amount.required' => 'The amount field is required.',
            'amount.numeric' => 'The amount must be a valid number.',
            'amount.min' => 'The amount must be at least 1000.',
        ];
    }
}
