package com.example.hospitalappointmentsystem.controller;

import com.example.hospitalappointmentsystem.model.Appointment;
import com.example.hospitalappointmentsystem.repository.AppointmentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
    private final AppointmentRepository repository;

    public AppointmentController(AppointmentRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Appointment> list() {
        return (List<Appointment>) repository.findAll();
    }

    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        return repository.save(appointment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
