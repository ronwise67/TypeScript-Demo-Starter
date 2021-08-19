let username: string = "instructor"
let password: string = "Letmein1234!"
let instructorId: number = 5

let greeting = "Hello"

let companyName: string
companyName = "Eleven Fifty"

let isLoggedIn: boolean = true
let isGoldLeverUser: boolean = true

let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']

console.log("Student List:", studentList[0])

let dataFromThirdParty: any = '12345'
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

dataFromThirdParty = 12345
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

function sayHelloToAll() : void {
    console.log("Hello to all!")
}

let undefinedVariable: undefined = undefined
let nullVariable: null = null

// Declare a tuple type
let usernameAndId: [number, string]
// Initialize it
usernameAndId = [1, "ronisreally54"]

// Enums
enum WeaponType {Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword

enum CardType {Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType)

let x: number | string
let y: number | null

x = '1234'
x = 1234
