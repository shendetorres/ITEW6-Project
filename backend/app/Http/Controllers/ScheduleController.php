<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    // 1. Show all faculties' schedules and details
    public function index()
    {
        $schedules = Schedule::all()->map(function (Schedule $schedule) {
            return [
                'id' => (string) $schedule->id,
                'subject_id' => $schedule->subject_id,
                'faculty_id' => $schedule->faculty_id,
                'day' => $schedule->day,
                'start_time' => $schedule->start_time,
                'end_time' => $schedule->end_time,
                'room' => $schedule->room,
                'created_at' => $schedule->created_at,
                'updated_at' => $schedule->updated_at,
            ];
        });
        
        return response()->json($schedules);
    }

    // 2. Reassign faculty to a schedule
    public function reassignFaculty(Request $request, $scheduleId)
    {
        $schedule = Schedule::find($scheduleId);
        
        if (!$schedule) {
            return response()->json(['error' => 'Schedule not found'], 404);
        }
        
        $validated = $request->validate([
            'faculty_id' => 'required|string',
        ]);
        
        $schedule->update(['faculty_id' => $validated['faculty_id']]);
        
        return response()->json(['message' => 'Faculty reassigned successfully', 'schedule' => $schedule]);
    }
}
