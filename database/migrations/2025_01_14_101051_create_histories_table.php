<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('order_number')->nullable();
            $table->text('details')->nullable();
            $table->string('image')->nullable();
            $table->enum('status', ['Y', 'N', 'R'])->default('Y');
            $table->string('slug')->nullable();
            $table->string('short_bio')->nullable();
            $table->string('feature_image')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('histories');
    }
};