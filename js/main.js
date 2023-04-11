class Person { /* Las clases inician con mayusculas */
    /* Propiedaddes */
    name = "";
    email = "";
    age = 0;
    resumen = "";
    static total = ""; /* No se puede heredar */
    constructor(name, email, age, resumen) { /* Método especial */
        this.name = name; /* el que no tiene this es del constructor */
        this.email = email.toLowerCase();
        this.age = (age < 18) ? 18 : age; /* Si la edad es menor de 18, dejarle 18 */
        this.resumen = resumen;
        Person.total++; /* Aumenta conforme haya más personas en la clase */
    }//constructor person
    /* Es un método de una clase */
    prinInfo() {
        console.log(this.name, this.email, this.age, this.resumen);
    }
}

class Employee extends Person { /* Una nueva clase que extiende la funcionalidad de la clase Person */
    department = "";
    salary = 0.0;
    constructor(name, email, age, resumen, department, salary) {
        super(name, email, age, resumen); /* Reutiliza el constructor de la clase superior */
        this.department = department;
        this.salary = salary;
    }//constructor
    calculateSalary() { /* Método para calcular Salarios mensuales */
        return ((this.salary * 30) * 1.16).toFixed(2);
    }//calculateSalary

    prinInfo() {
        super.prinInfo(); /* Llama al método de la clase superior */
        console.log(this.department, this.salary, this.calculateSalary());
    }//printInfo
}//class Employee

/* Declarar un objeto en base a una clase */
let Maritere = new Employee("Maritere", "maritere@email.com", 21, "Java FullStack Developer", "IT", 1255.20); /* Se usa el constructor para asiganre parametros */
let Dora = new Employee("Dora García", "dora.garcía@gmail.com", 16, "FullStack Develop", "Developmet", 1115.25);
let Vale = new Employee("Valeria", "valeria.arquieta@gmail.com", 16, "FullStack Develop", "Developmet", 1205.25);
Maritere.prinInfo();
Dora.prinInfo();
Vale.printInfo();

Person.prinTotal();