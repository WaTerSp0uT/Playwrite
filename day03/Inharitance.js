
class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat(){
        console.log(`${this.name} is eating.`);
    }
}


class Student extends Person{
    constructor(name, age, gender, studentID){
        super(name, age, gender);
        this.studentID = studentID;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person{
    teach(){
        console.log(`${this.name} is teaching`);
    }
}

let student = new Student('John', 25, 'Male','A01');

let teacher = new Teacher('Sara', 30, 'Female');

console.log(student);

console.log(teacher);

console.log(student.eat());

student.study();

teacher.teach();