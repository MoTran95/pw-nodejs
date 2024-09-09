import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
    protected minimumBalance = 50;
    protected balance = 0;
    deposit(amount: number): void {
       this.balance += amount;
    }
    withdraw(amount: number): void {
        if(this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
        }
        else {
            throw new Error("The balance is not sufficient to withdraw")
        }
    }
    getBalance(): number {
        return this.balance;
    }
    
}