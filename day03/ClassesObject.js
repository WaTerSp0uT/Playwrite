
class Employee {

    static myStaticMethod() {

    }

    static myStaticVariable = 'Static Variable';

    constructor(emplyeeName = 'Unknown', age=0, gender= 'Unknown',salary =1) {
        this.emplyeeName = emplyeeName;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }

    // constructor(emplyeeName, age, gender, salary, department) {
    //     super(emplyeeName, age, gender, salary);
    //     this.department = department;
    // }

    work(){
        console.log('Employee name - ' + this.emplyeeName + ' is working' );
    }
toString(){
    return `Employee Name: ${this.emplyeeName}, Age: ${this.age}, Gender: ${this.gender}, Salary: ${this.salary}`;
}

}


let employee1 = new Employee('Breana', 35, 'Female', 45000); 
console.log(employee1);

let employee2 = new Employee(); 
console.log(employee2);

let employee3 = new Employee('Yaro'); 
console.log(employee3);

let employee4 = new Employee('Yaro',31); 
console.log(employee4);

console.log(employee4.work());