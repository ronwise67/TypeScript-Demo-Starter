class Person {
    firstName: string
    lastName: string

    sayHello(){
        console.log("Hello", this.firstName)        
    }
}

let phil: Person = new Person()

phil.firstName = "Phil"
phil.lastName = "Donahue"

phil.sayHello()


class Dude {
    firstName: string
    lastName: string

    sayHelloToFullName(){
        console.log("Hello,", this.firstName, this.lastName)
    }
}

let neil: Dude = new Dude()

neil.firstName = "Neil"
neil.lastName = "Peart"

neil.sayHelloToFullName()


class Game {
    constructor(name: string, maker: string){
        this.gameName = name
        this.gameMaker = maker
    }
    gameName: string
    gameMaker: string
}

let battleship: Game = new Game('Battleship', 'Hasbro')


class Vehicle {
    type: string
    make: string
    model: string
    manufactureYear: number
    runs: boolean
    topSpeed: number
}


class Animal {
    color: string
    legs: number
    wings: boolean
}

class Bear extends Animal {
    willKillYou: boolean
    hybernatesForMonths: number
}

let yogi: Bear = new Bear()
yogi.willKillYou = true
yogi.color = "brown"
yogi.legs = 4
yogi.hybernatesForMonths = 5
yogi.wings = false

class Eagle extends Animal {
    topSpeed: number
    laysEggs: boolean
}

let adler: Eagle = new Eagle
adler.topSpeed = 124
adler.laysEggs = true
adler.color = "grey"
adler.legs = 2
adler.wings = true


// class Store {
//     constructor(name: string, city: string) {
//         this.name = name
//         this.city = city
//     }
//     name: string
//     city: string
// }

// let ikea: Store = new Store("Ikea", "Fishers")

class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers')


class Employee extends Person{
    private _salary: number
    getSalary(): string {
        return this._salary.toString()
    }

    setSalary(newSalary: number) {
        this._salary = newSalary
    }
}

let newEmployee: Employee = new Employee()
newEmployee.setSalary(30000)

let salaryResult: string = newEmployee.getSalary()
console.log("The salary is:", salaryResult)

