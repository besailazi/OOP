//CONSTRUCTOR FUNCTION//
function CreateCar (brand, model, color){

		this.brand = brand;
		this.model = model;
		this.color = color;
		this.printDetails = function () {
			console.log('The car is a ' + this.color + ' ' + this.brand + ' ' + this.model + ' model.');
		};

	}

const car = new CreateCar ('Mercedes', 'E-class', 'black');
const car1 = new CreateCar ('BMW', '3-serie', 'white');
const car2 = new CreateCar ('Golf', '8', 'blue');

console.log(car.printDetails());
console.log(car1.printDetails());
console.log(car2.printDetails());

//ADDING CLASSES//

class Book {
	constructor(title, author, pages){
		this.title = title
		this.author = author
		this.pages = pages
		this.isApproved = this.isApproved
	}
	static isBookApproved (){
		return 'The book content is being processed for approval.'
	}
	addBook(){
		console.log(`${this.title} by ${this.author} has been ADDED to the collection.`)
	}
	removeBook(){
		console.log(`${this.title} by ${this.author} has been REMOVED from the collection.`)
	}
}

const book1 = new Book ('Javascript: The Definitive Guide', 'David Flangen', 690);

console.log(Book.isBookApproved());
Book.isBookApproved();



//INHERITANCE//

class Person {
	constructor(firstname, lastname, bithYear){
		this.firstname = firstname
		this.lastname = lastname
		this.bithYear = bithYear
	}
	calculateAge (){
		return 2024 - this.bithYear
	}
}
const person1 = new Person('Jack', 'Smith', 1990);


/*class Employee extends Person{
	constructor(firstname, lastname, bithYear, employeeId, department){
		super(firstname, lastname, bithYear)
		this.employeeId = employeeId
		this.department = department
	}
	printEmployeeDetails(){
		return `The employee name is ${this.firstname} ${this.lastname} and is ${this.calculateAge()}years old
		The employee work id is ${this.employeeId} and works in ${this.department} department`
	}
}

const employee1 = new Employee('Kate', 'Jackson', 1995,1234, 'Technology')
console.log(employee1);
console.log(employee1.calculateAge());*/

class Employee {
	constructor(firstname, lastname){
		this.firstname = firstname
		this.lastname = lastname
	}
	clacSalary(){
		return `${this.firstname} ${this.lastname} Recives $4000 as a salary!`
	}
}
const employee1 = new Employee('Robert', 'Jones')
console.log(employee1.clacSalary());

//EXERCISE 2//
class Account {
	constructor(name, balance){
		this.name = name
		this.balance = balance
	}
	addDeposit(deposit){
	return this.balance += deposit
		
	}
	removeWithdraw(withdraw){
		if (withdraw > this.balance) {
			console.log("Withdraw amount exceeds the current balance. Withdraw rejected.");
			
		 } else {
			this.balance -= withdraw;
		 }
		 return this.balance;
	  }

	getBalance(){
		return this.balance
	}
}

const account1 = new Account('Jack Roberts', 4000)
const account2 = new Account('Kate Adams', 2000)
const account3 = new Account('James Phillip', 3000)

console.log(account1.addDeposit(3000));
console.log(account2.removeWithdraw(3000));
console.log(account3.getBalance(2000));