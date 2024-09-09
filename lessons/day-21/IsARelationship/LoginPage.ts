export default abstract class LoginPage {

    abstract inputUsername(username: string): void;
    abstract inputPassword(username: string): void;
    abstract clickOnLoginButton(): void;
}