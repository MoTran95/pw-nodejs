import LoginPage from "./LoginPage";

export default class LoginTestFlow {

    private username: string;
    private password: string;

    constructor(username: string, passwprd: string) {
        this.username = username;
        this.password = passwprd
    }

    login(loginPage: LoginPage) {
        loginPage.inputUsername(this.username);
        loginPage.inputPassword(this.password);
        loginPage.clickOnLoginButton()
    }
}