let divEmployees = document.getElementById("divEmployees");
/**
 * Clase Person que representa a una persona y su información
 */
class Person {
    /** @property {String} name - Identifica el nombre de la persona */
    name = "";
    /** @property {String} email - Identifica el correo electrónico de la persona */
    email = "";
    /** @property {Number} age - Identifica la edad de la persona */
    age = 0;
    /** @property {String} resume - Almacena el resumen de la persona  */
    resume = "";
    /** @property {String} id - Identifica como única a la persona */
    id=0;
    static total=0;
    /** 
     * @static {Number} total - Variable de clase (estática) que identifica el total de personas 
     */

    /**
     * 
     * @param {*} name - Identifica el nombre de la persona
     * @param {*} email - Identifica el correo de la persona
     * @param {*} age - Identifica la edad de la persona
     * @param {*} resume - Almacena el resumen de la persona
     */
    constructor(name, email, age, resume) {
        this.name = name;
        this.email = email.toLowerCase();
        this.age = (age < 18) ? 18 : age;//if ternario
        this.resume = resume;
        Person.total++;
        this.id=Person.total;
    }//constructor Person
    static printTotal(){
        console.log(Person.total);
    }//printTotal
    /* 
    printInfo() {//método
        console.log(this.name, this.email, this.age, this.resume)
    }//printInfo
 */
    printInfo(div) {//método
        div.insertAdjacentHTML("beforeend",
        `
        <div id="card_${this.id}" class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.name}</div>
        <div class="card-body">
          <h5 class="card-title">${this.email}</h5>
          <p class="card-text">${this.resume}</p>
          <p class="card-text">${this.age}</p>
        </div>
      </div>
      
        `
        );
    }//printInfo

}//class Person

class Employee extends Person {
    department = "";
    salary = 0.0;
    constructor(name, email, age, resume, department, salary) {
        super(name, email, age, resume); // super de "clase superior"
        this.department = department;
        this.salary = salary;
    }//constructor
    calculateSalary() {
        return ((this.salary * 30) * 1.16).toFixed(2);
    }//calculateSalary
    printInfo(div) {
        super.printInfo(div);
        let cardBody=document.getElementById(`card_${this.id}`)
        .getElementsByClassName("card-body")[0];
        cardBody.insertAdjacentHTML("beforeend",`
        <p class="card-text">${this.department}</p>
        <p class="card-text text-end">${this.calculateSalary()}</p>
        `)
       /*  console.log(this.department, this.salary, this.calculateSalary()); */
    }//printInfo
}//class Employee
/* 
let john = new Person("John Doe", "jdoe@gmail.com", 17, "Desconocido");
let jane = new Person("jane Doe", "jane.doe@gmail.com", 26, "Jane");
let maritere = new Employee("Maritere", "maritere@gmail.com", 21, "Java FullStack Developer", "IT", 1255.20);
let dora = new Employee("Dora Garcia", "dora.garcia@gmail.com", 21, "FulStack Developer", "Development", 1115.25);
let vale= new Employee("Valeria","valeria.arquieta@gmail.com",21,"FullStack Java Developer","Development",1205.12);
 */
/* 
let john1=new Person();
john.name="John Doe";
john.age=40;
john.email="jdoe@gmail.com";
 */
/* john.resume = "Otra cosa";
john.printInfo();
jane.printInfo();
 */
/* 
maritere.printInfo(divEmployees);
dora.printInfo(divEmployees);
vale.printInfo(divEmployees);
Person.printTotal();
 */
/* console.log(Person.total); */
let employees=[];
employees.push(
    new Employee("Maritere", "maritere@gmail.com", 21, "Java FullStack Developer", "IT", 1255.20),
    new Employee("Dora Garcia", "dora.garcia@gmail.com", 21, "FulStack Developer", "Development", 1115.25),
    new Employee("Valeria","valeria.arquieta@gmail.com",21,"FullStack Java Developer","Development",1205.12),
    new Employee("Carolina","caro@gmail.com",21,"FullStack Java Developer","Development",1205.12)
);

employees.forEach(e=>e.printInfo(divEmployees));