<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => 'required|max:30',
        ];

        return $rules;
    }


    public function messages(): array
    {
        return [
            'email.required' => 'Email field is required',
            'email.email' => 'Email format does not match',
            'password.required' => 'Password field is required',
            'password.max' => 'Password cannot be greater than 30 characters',
        ];
    }
}
