import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

const checkingAccount = new CheckingAccount();
const savingAccount = new SavingAccount();

checkingAccount.deposit(100);
savingAccount.deposit(70);

console.log("Checking account balance", checkingAccount.getBalance());
console.log("Saving account balance", savingAccount.getBalance());

try {
    checkingAccount.withdraw(70);
} catch (error) {
    console.log(error);
}

try {
    savingAccount.withdraw(80);
} catch (error) {
    console.log(error);
}

checkingAccount.withdraw(50);
savingAccount.withdraw(50);

console.log("Checking account balance", checkingAccount.getBalance());
console.log("Saving account balance", savingAccount.getBalance());
