package com.example.hospital.model;

import java.time.LocalDateTime;

public class Appointment {
    private Long id;
    private String patientName;
    private String doctorName;
    private LocalDateTime appointmentTime;

    public Appointment() {}

    public Appointment(Long id, String patientName, String doctorName, LocalDateTime appointmentTime) {
        this.id = id;
        this.patientName = patientName;
        this.doctorName = doctorName;
        this.appointmentTime = appointmentTime;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }
    public String getDoctorName() { return doctorName; }
    public void setDoctorName(String doctorName) { this.doctorName = doctorName; }
    public LocalDateTime getAppointmentTime() { return appointmentTime; }
    public void setAppointmentTime(LocalDateTime appointmentTime) { this.appointmentTime = appointmentTime; }
}
