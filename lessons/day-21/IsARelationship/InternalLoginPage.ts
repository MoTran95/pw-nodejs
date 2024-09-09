import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {

    inputUsername(username: string): void {
        console.log("Internal username input");

    }
    inputPassword(username: string): void {
        console.log("Internal password input");

    }
    clickOnLoginButton(): void {
        console.log("Click on Login Button");

    }

}