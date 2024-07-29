// Define class called BankAccount and its properties
class BankAccount {
    constructor(accountNumber, accountHolder, balance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Implement methods for depositing, withdrawing, and checking balance
    deposit(amount) {
        this.balance += amount; // Access the current balance and add the deposit amount to it
    }
    
    withdraw(amount) {
        if (this.balance >= balance) {
            this.balance -= amount; // Access the current balance and substract the specified amount from it 
        } else {
            console.log("You're broke!");
        }
        
    }
    
    checkBalance() {
        return this.balance;
    }
};

