import ExternalLoginPage from "./ExternalLoginPage ";
import InternalLoginPage from "./InternalLoginPage";
import LoginPage from "./LoginPage";
import LoginTestFlow from "./LoginTestFlow";


const internalLoginPage: LoginPage = new InternalLoginPage();
const externalLoginPage: LoginPage = new ExternalLoginPage();
const loginTestFlow = new LoginTestFlow('teo', '123456789') 

loginTestFlow.login(internalLoginPage);
loginTestFlow.login(externalLoginPage);
 