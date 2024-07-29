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

    }

    checkBalance() {

    }
};