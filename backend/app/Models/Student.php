<?php

namespace App\Models;

class Student extends FirestoreModel
{
    protected $fillable = [
        'name', 'email', 'department', 'year_level', 'status',
        'id_number', 'phone', 'address', 'date_of_birth',
        'skills', 'organizations', 'activities', 'academic_history'
    ];

    protected $casts = [
        'academic_history' => 'array',
        'date_of_birth' => 'date',
    ];

    protected static function getFirestoreCollection(): string
    {
        return 'students';
    }
}
