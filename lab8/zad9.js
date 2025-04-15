function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;