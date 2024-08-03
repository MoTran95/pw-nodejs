const readline = require('readline-sync');
const bankAccountDream = {
    accountName: 'Dream',
    accountNumber: '123456789',
    routingNumber: '12345',
    balance: 40000,
};

const bankAccountBlue = JSON.parse(JSON.stringify(bankAccountDream))
bankAccountBlue.accountName = 'Blue';
bankAccountBlue.accountNumber = '113114115';

const bankAccounts = [bankAccountDream, bankAccountBlue];
myApp();

function myApp() {
    let account;
    while (true) {
        printGameMenu();
        let option = readline.question('Your option: ');
        switch (option) {
            case "1":
                let accountNumber = readline.question("Please input your account number").trim();
                account = findAccountNumber(accountNumber, bankAccounts);
                validateAccount(account);
                break;
            case "2":
                if (!account) {
                    let accountNumber = readline.question("Please input your account number").trim();
                    account = findAccountNumber(accountNumber, bankAccounts);
                }
                let withdrawBalance = readline.question("Please input your balance which wants to withdraw:").trim();

                try {
                    withdrawMoney(withdrawBalance, account);
                    console.log(`You withdrew successfully. Your current balance is ${account.balance}`);
                } catch (error) {
                    console.log("Error", error.message);
                }
                break;
            case "0":
                return;
            default:
                break;
        }
    }
}

function printGameMenu() {
    console.log("=== Banking application===");
    console.log("1. Find an account");
    console.log("2. Update balance");
    console.log("0. Exit the program");
}
function findAccountNumber(accountNumber, bankAccounts) {
    return bankAccounts.find(account => account.accountNumber === accountNumber);
}
function withdrawMoney(withdrawBalance, currentAccount) {
    if (withdrawBalance <= 0) {
        throw new Error("Something went wrong. Please input a postitive number");
    }
    if (currentAccount) {
        if (withdrawBalance <= currentAccount.balance) {
            currentAccount.balance = currentAccount.balance - withdrawBalance;
        }
        else {
            throw new Error(`You are not enough balance to withdraw.`);
        }
    }
}
function validateAccount(account) {
    if (account) {
        return console.log(`The account is existing. Account Name: ${account.accountName}, Balance:${account.balance} `);
    }
    console.log("AccountNumber is not existing.");
}