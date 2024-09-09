import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {

    inputUsername(username: string): void {
        console.log("External username input");

    }
    inputPassword(username: string): void {
        console.log("External password input");

    }
    clickOnLoginButton(): void {
        console.log("Click on Login Button");

    }

}