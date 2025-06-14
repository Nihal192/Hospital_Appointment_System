package com.example.hospitalappointmentsystem.repository;

import com.example.hospitalappointmentsystem.model.Appointment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
}
