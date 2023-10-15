function Student (firstName, lastName, year, marks= [], attendance = [], Cours) {
     this.firstName =firstName,
     this.lastName = lastName,
     this.year = year,
     this.marks = marks,
     this.attendance = attendance,
     this.Cours = Cours;
} 



Student.prototype.addMark = function(newMark){
    return this.marks.push(newMark);
}

Student.prototype.addAttendance = function(newAttendance){
    return this.attendance.push(newAttendance);
}

Student.prototype.getAverageAttendanse = function(preciosity = 1) {
    if(!this.attendance.length) return undefined

    const avga =
        this.attendance.reduce((sum, v) => sum + v)
        / this.attendance.length

    const pow = Math.pow(10, preciosity)

    return Math.round(avga * pow) / pow
}

Student.prototype.getAverageMarks = function(preciosity = 1) {
    if(!this.marks.length) return undefined

    const avg =
        this.marks.reduce((sum, v) => sum + v)
        / this.marks.length

    const pow = Math.pow(10, preciosity)

    return Math.round(avg * pow) / pow
}
Student.prototype.changeCours = function(newCours){
    return this.cours = newCours;
}
Student.prototype.getFullInfo = function(){
    return "Full Name: "+ this.firstName + this.lastName +
    "\nYear of birth: " + this.year +
    "\nMarks: " + this.marks +
    "\nAttendance: " + this.attendance+
    "\nCours: "+ this.cours;
}
Student.prototype.getAge = function(){
    return new Date().getFullYear() - this.year;
}


const student1 = new Student ("Jhon", "Snow", 1988, undefined, undefined, "Java")
student1.addMark(5);
student1.addMark(2);
student1.addAttendance(1);
student1.addAttendance(1);
student1.changeCours("JS");

console.log(student1);
console.log(student1.getAge());
console.log(student1.getFullInfo());
console.log(student1.getAverageMarks());
console.log(student1.getAverageAttendanse());