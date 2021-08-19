var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
var greeting = "Hello";
var companyName;
companyName = "Eleven Fifty";
var isLoggedIn = true;
var isGoldLeverUser = true;
var studentList = ['Tom', 'Tracy', 'Nikaya'];
console.log("Student List:", studentList[0]);
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
function sayHelloToAll() {
    console.log("Hello to all!");
}
var undefinedVariable = undefined;
var nullVariable = null;
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, "ronisreally54"];
// Enums
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
var x;
var y;
x = '1234';
x = 1234;
//# sourceMappingURL=01-types.js.map