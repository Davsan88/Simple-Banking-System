import { BankAccount } from "./bankAccount.js";


// Create instances of BankAccount
const account1 = new BankAccount("1234", "D. Sanchino", 50);
const account2 = new BankAccount("5678", "S. Sanchulla", 200);

// Demonstrate the usage of methods
console.log(account1.checkBalance()); // Should show initial balance
account1.deposit(100);
console.log(account1.checkBalance()); // Should show updated balance after deposit
account1.withdraw(200);
console.log(account1.checkBalance()); // Should show updated balance after withdrawal

console.log(account2.checkBalance()); // Should show initial balance
account2.withdraw(100);
console.log(account2.checkBalance()); // Should show updated balance after withdrawal
account2.deposit(300);
console.log(account2.checkBalance()); // Should show updated balance after deposit