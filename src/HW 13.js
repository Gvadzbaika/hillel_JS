function Student (name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.marks = {};
    this.attendance = {};
    this.courses = [];
   }

   Student.prototype.addMark = function (mark, course) {

    if (!this.marks[course]) {
      this.marks[course] = [];  
   }
   
    if (!Object.hasOwn(this.marks, course)) {
      this.marks[course] = [];
    }
    
    this.marks[course].push(mark);
    }

    Student.prototype.addAttendance = function (present, course) {
 
        if (!this.attendance[course]) {
         this.attendance[course] = [];
        }      
       this.attendance[course].push(present)
       } 


       Student.prototype.getAverageMarks = function() {
    
}
       
       Student.prototype.getAverageAttendanse = function() {
   
}

Student.prototype.changeCourse = function(newCourse){
    return this.course = newCourse;
}

Student.prototype.getFullInfo = function(){
    for (let key in Student)
    if ( typeOff (Student[key]) === 'object'){
        for(let i in Student[key]){
            return i + Student[key][i];
        } }   
    else  {
        return key + Student[key];    
    }
}

Student.prototype.getAge = function(){
    return new Date().getFullYear() - this.year;
}


const student1 = new Student ("Jhon", "Snow", 1988)
student1.addMark(5, "Java");
student1.addMark(2, "Java");
student1.addAttendance(1, "Java");
student1.addAttendance(1, "Java");
student1.changeCours("JS");

console.log(student1);
console.log(student1.getAge());
console.log(student1.getFullInfo());
console.log(student1.getAverageMarks());
console.log(student1.getAverageAttendanse());