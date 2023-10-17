function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.marks = {};
    this.attendance = {};
    this.courses = [];
  }
  
  Student.prototype.addMark = function (mark, course) {
    if (!this.marks[course]) {
      this.marks[course] = [];
    }
    this.marks[course].push(mark);
  };
  
  Student.prototype.addAttendance = function (present, course) {
    if (!this.attendance[course]) {
      this.attendance[course] = [];
    }
    this.attendance[course].push(present);
  };
  
  Student.prototype.getAverageMarks = function (course) {
    if (this.marks[course] && this.marks[course].length > 0) {
      const sum = this.marks[course].reduce((acc, mark) => acc + mark, 0);
      return sum / this.marks[course].length;
    }
    return 0;
  };
  
  Student.prototype.getAverageAttendance = function (course) {
    if (this.attendance[course] && this.attendance[course].length > 0) {
      const presentCount = this.attendance[course].filter(present => present).length;
      return (presentCount / this.attendance[course].length) * 100;
    }
    return 0;
  };
  
  Student.prototype.changeCourse = function (newCourse) {
    this.courses.push(newCourse);
  };
  
  Student.prototype.removeCourse = function (course) {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
      delete this.marks[course];
      delete this.attendance[course];
    }
  };
  
  Student.prototype.getFullInfo = function () {
    return {
      name: this.name,
      surname: this.surname,
      birthYear: this.birthYear,
      courses: this.courses,
      marks: this.marks,
      attendance: this.attendance,
    };
  };
  
  Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
  
  const student1 = new Student("Jhon", "Snow", 1988);
  
  student1.changeCourse("Java");
  student1.addMark(85, "Java");
  student1.addMark(92, "Java");
  student1.addAttendance(true, "Java");
  student1.addAttendance(false, "Java");
  
  student1.changeCourse("JS");
  student1.addMark(78, "JS");
  student1.addMark(92, "JS");
  student1.addAttendance(true, "JS");
  student1.addAttendance(true, "JS");
  
  console.log(student1.getFullInfo());
  console.log("Age:", student1.getAge());
  console.log("Average Marks for Java", student1.getAverageMarks("Java"));
  console.log("Average Attendance for Java:", student1.getAverageAttendance("Java"));
