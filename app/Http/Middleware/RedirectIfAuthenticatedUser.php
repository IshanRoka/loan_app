<?php

namespace App\Http\Middleware;

use Closure;
use Exception;

class RedirectIfAuthenticatedUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $post = $request->all();


            // dd($post);
            $userId = Auth()->user()->id;
            // dd($userId);
            if (!$userId)
                throw new Exception('User not found.', 1);
        } catch (Exception) {
            return redirect('/')->with('error', 'Please sign in to continue.');
        }
        return $next($request);
    }
};
