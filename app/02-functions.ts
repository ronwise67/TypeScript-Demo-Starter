function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo
}

addNumbers(1, 2)

function sayHello(name: string) : string {
    return name
}

sayHello("Ken")

// function signIn(username: string, password: string) {
//     return(username + password)
// }


function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString)
    return numOne + numTwo
}

addNumbersWithOptional(1, 2)
addNumbersWithOptional(1, 2, "This is optional")


function fullName(fName: string, lName: string, mName?: string){
    console.log(fullName)
    return fName + lName + mName
}

fullName("Ron", "Wise", "Scott")
fullName("Ron", "Wise")
