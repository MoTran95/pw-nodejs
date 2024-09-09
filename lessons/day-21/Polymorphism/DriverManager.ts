import { AppiumDriver } from "./AppiumDriver";
import { ISODriver } from "./ISODriver";

export default class DriverManager {

    static getDriver(platformName: string): AppiumDriver{
        if(!platformName){
            throw new Error ("Platform can't be empty")
        }
        if(platformName === 'iso'){
            return new ISODriver(); 
        }  else {
            throw new Error (" Support drivers: iso")
        }
    }
}