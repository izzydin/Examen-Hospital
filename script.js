function Hospital(name) {
    this.name = name;
    this.emplados = [];
    this.patientRegister = [];
}
function Employe(employeName) {
    this.employeName = employeName;
    this.salary = 0;
}
function Doctor(speciality){
    this.speciality = speciality;
    this.patientSchedule = [];
}
function Recepcionist(){
    this.position = '';
}
function CleanPersonal(){
    //Lugar del holspital donde le toca hacer limpieza
    this.assignation = '';
    this.workSchedule = '';
}
function Nurse(){
    //Lugar en el Hospital donde tiene asignado su trabajo
    this.assignation = '';
    this.pattientsInCharge = [];
}
function Patient(patientName, phoneNumber, ci){
    this.patientName = patientName;
    this.phoneNumber = phoneNumber;
    this.ci= ci;
}
function RegularPatient(){
    this.date = '';
}
function EmergencyPatient(incomingStatus){
    this.incomingStatus = incomingStatus;
    this.actualPatientStatus = '';
}
function InterneePatient(){
    this.interneeRoom = '';
}

Doctor.prototype = new Employe;
Recepcionist.prototype = new Employe;
CleanPersonal.prototype = new Employe;
Nurse.prototype = new Employe;
RegularPatient.prototype = new Patient;
EmergencyPatient.prototype = new Patient;
InterneePatient.prototype = new Patient;

Employe.prototype.setSlary = function(payAmount){
    this.salary = payAmount;
};
Doctor.prototype.givePatient = function(patient){
    this.patientSchedule.push(patient);
};
Recepcionist.prototype.giveWorkPosition = function(position){
    this.position = position;
};
CleanPersonal.prototype.giveCleanSection = function(section){
    this.assignation = section;
};
CleanPersonal.prototype.schedule = function(daySchedule){
    this.workSchedule = daySchedule;
};
Nurse.prototype.giveAssignation = function(dayWork){
    this.assignation = dayWork;
}
Nurse.prototype.givePatient = function(patient){
    this.pattientsInCharge.push(patient);
};
RegularPatient.prototype.giveDate = function(dateTime){
    this.date = dateTime;
};
EmergencyPatient.prototype.giveActualStatus = function(actualStatus){
    this.actualPatientStatus = actualStatus;
};
InterneePatient.prototype.giveRoom = function(roomNumber){
    this.interneeRoom = roomNumber;
};
