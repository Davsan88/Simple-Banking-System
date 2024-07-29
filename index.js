import { BankAccount } from "./bankAccount.js";


// Create instances of BankAccount
const account1 = new BankAccount("1234", "D. Sanchino", 50);
const account2 = new BankAccount("5678", "S. Sanchulla", 200);

// Perform a deposit on account1 and log the result
console.log(account1.deposit(50)); // Expected: Deposited 50. New balance: 100

// Perform a withdrawal on account2 and log the result
console.log(account2.withdraw(250)); // Expected: Insufficient funds

// Perform a successful withdrawal on account2 and log the result
console.log(account2.withdraw(150)); // Expected: Withdrew 150. New balance: 50

// Check balances
console.log(`Account 1 balance: ${account1.checkBalance()}`); // Expected: 100
console.log(`Account 2 balance: ${account2.checkBalance()}`); // Expected: 50