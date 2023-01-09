// OOP Concepts 
/*
Abstraction :
 

Encapsulation :


Inheritance :


polymorphism:


*/
class Person {
    name;
}
class student extends Person {
    cource;
    rollnumber;
}
class Teacher extends Person {
    cource;
    timing;
}
class cource {
    classTeacher;
    students;
    timing;
}
const student1 = new student();
student1.name = "Studnet 1";
student1.cource = "ENG ECO";
student1.rollnumber = "313";
const student2 = new student();
student2.name = "Studnet 2";
student2.cource = "ENG ECO";
student2.rollnumber = "313";
const student3 = new student();
student3.name = "Studnet 3";
student3.cource = "ENG ECO";
student3.rollnumber = "313";
const student4 = new student();
student4.name = "Studnet 4";
student4.cource = "ENG ECO";
student4.rollnumber = "313";
const teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.cource = "Economics";
teacher.timing = "6-10";
const Cource = new cource();
Cource.classTeacher = teacher;
Cource.timing = teacher.timing;
const stdArray = [student1, student2, student3, student4];
Cource.students = stdArray;
console.log(Cource);
export {};
