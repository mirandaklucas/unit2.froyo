// Pop up asking user to input the ice cream they want
let userInput = prompt(
    "Please enter your desired ice cream flavors, separated by commas:"
)

alert(userInput)

//  found in console of html page
const flavorsInput = userInput.split(",")

const flavorsAmt = {}

for (const flavor of flavorsInput){
    if (flavorsAmt[flavor]) {
        flavorsAmt[flavor]++
    } else {
        flavorsAmt[flavor] = 1
    }
}

console.log("How Much Froyo")
console.log('-----------')
console.table(flavorsAmt)





