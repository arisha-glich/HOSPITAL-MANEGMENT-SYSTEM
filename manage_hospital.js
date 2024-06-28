// manage_hospital.js

function showMessage(message) {
    alert(message);
}

// Attach onclick event handlers to buttons for Patients section
document.getElementById("addPatientBtn").onclick = function() {
    showMessage("Patient added successfully");
};
document.getElementById("editPatientBtn").onclick = function() {
    showMessage("Patient edited successfully");
};
document.getElementById("deletePatientBtn").onclick = function() {
    showMessage("Patient deleted successfully");
};

// Attach onclick event handlers to buttons for Doctors section
document.getElementById("addDoctorBtn").onclick = function() {
    showMessage("Doctor added successfully");
};
document.getElementById("editDoctorBtn").onclick = function() {
    showMessage("Doctor edited successfully");
};
document.getElementById("deleteDoctorBtn").onclick = function() {
    showMessage("Doctor deleted successfully");
};

// Attach onclick event handlers to buttons for Nurses section
document.getElementById("addNurseBtn").onclick = function() {
    showMessage("Nurse added successfully");
};
document.getElementById("editNurseBtn").onclick = function() {
    showMessage("Nurse edited successfully");
};
document.getElementById("deleteNurseBtn").onclick = function() {
    showMessage("Nurse deleted successfully");
};

// Attach onclick event handlers to buttons for Pharmacists section
document.getElementById("addPharmacistBtn").onclick = function() {
    showMessage("Pharmacist added successfully");
};
document.getElementById("editPharmacistBtn").onclick = function() {
    showMessage("Pharmacist edited successfully");
};
document.getElementById("deletePharmacistBtn").onclick = function() {
    showMessage("Pharmacist deleted successfully");
};

// Attach onclick event handlers to buttons for Equipment section
document.getElementById("allocateEquipmentBtn").onclick = function() {
    showMessage("Equipment allocated successfully");
};
document.getElementById("addEquipmentBtn").onclick = function() {
    showMessage("Equipment added successfully");
};
document.getElementById("editEquipmentBtn").onclick = function() {
    showMessage("Equipment edited successfully");
};
document.getElementById("deleteEquipmentBtn").onclick = function() {
    showMessage("Equipment deleted successfully");
};

// Attach onclick event handlers to buttons for Appointments section
document.getElementById("scheduleAppointmentBtn").onclick = function() {
    showMessage("Appointment scheduled successfully");
};
document.getElementById("editAppointmentBtn").onclick = function() {
    showMessage("Appointment edited successfully");
};
document.getElementById("cancelAppointmentBtn").onclick = function() {
    showMessage("Appointment canceled successfully");
};
