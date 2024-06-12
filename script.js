/* You are tasked with creating a JS program that simulates a simple online shopping 
experience. The program should allow users to browse products, add them to a cart, 
and calculate the totals cost of their purchases.

Task 1: Implement a conditional statement to check if a user is logged in before 
allowing them to add items to the cart. This can be done with creating a simple 
variable that represents whether or not the user is logged in.

Task 2: Use a loop to display the list of available products to the user and add 
functionality for users to add products to their cart. You can hard code this out by 
just creating item variables or for EXTRA CREDIT figure out a way to grab user inputs 
using prompt(). 

Task 3: Calculate the total cost of the items in the cart and display it to the user.
*/

let loggedIn = false;
let username = "";
let password = "";

while(!loggedIn){
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username === "username" && password === "password"){
        loggedIn = true;
        console.log('You are logged in');
    }
    else{
        console.log("Please log in");
    }
}

const products = [
    {name: "keyboard", price: 150.00},
    {name: "mouse", price: 75.50},
    {name: "monitor", price: 450.99},
    {name: "usb cable", price: 8.99}
    
]

console.log(products);


let cart = {};
function addToCart() {
    const item = prompt("What would you like to add to your cart?");
    const productTrue = products.find(product => product.name  === item.toLowerCase());

    if (productTrue) {
        cart[productTrue.name] = { ...productTrue}
        console.log(`${item} item added to cart.`);
      } else {
        console.log("Item not in products");
      }
    }
function totalPrice() {
    let total = 0;
    for (const item in cart) {
        total += cart[item].price
    }
    return total
}
addToCart();
totalPrice();

const total = totalPrice
console.log(`Your total is: $${totalPrice()}`);





/*Problem Statement:
Your task is to develop a JavaScript program that simulates a simple banking system. 
The program should include functions to perform basic banking operations such as 
deposit, withdrawal, and balance inquiry.

Task 1: Create a function to handle deposits into a bank account.

Task 2: Implement a function to handle withdrawals from a bank account, ensuring 
sufficient balance.

Task 3: Develop a function to check the current balance of the account.
*/


let account = 0;

function deposit(amount) {
    if(amount >= 0) {
        account += amount;
        console.log(`Deposit: $${amount}`);
    }else {
        console.log('Invalid deposit format, please try again.');
    }
}

function withdraw(amount) {
    if(amount > 0 && amount <= account) {
        account -= amount;
        console.log(`Amount Withdrawn: $${amount}`);
    }else {
        if(amount <= 0) {
            console.log('Invalid withdraw amount, please try again.');
        }else {
            console.log("Insufficient Funds!");
        }
    }
}

function balance() {
    console.log(`Balance: $${account}`);
}

deposit(100)
balance()
withdraw(50)
withdraw(100)
balance()


