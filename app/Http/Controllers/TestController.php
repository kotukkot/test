<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Databases;
use App\Models\Emails;

class TestController extends Controller
{

    public static function save(Request $request) {

        $validated = $request->validate([
            'type' => 'required|string|in:database,email',
        ]);
        
        return match ($validated['type']) {
            'database' => Databases::factory()->create(),
            'email' => Emails::factory()->create(),
        };

    }
}
