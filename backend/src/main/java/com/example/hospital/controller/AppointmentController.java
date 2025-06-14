package com.example.hospital.controller;

import com.example.hospital.model.Appointment;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
    private final List<Appointment> appointments = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    @GetMapping
    public List<Appointment> all() {
        return appointments;
    }

    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        appointment.setId(counter.incrementAndGet());
        if (appointment.getAppointmentTime() == null) {
            appointment.setAppointmentTime(LocalDateTime.now());
        }
        appointments.add(appointment);
        return appointment;
    }
}
