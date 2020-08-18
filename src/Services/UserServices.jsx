import GenericServices from './genericService'
import jwtDecode from 'jwt-decode'


class UserServices extends GenericServices{
    constructor(){
        super();
    }

    login=(email,password)=>new Promise((resolve,reject)=>{
        this.post("/buyer/loginBuyer",{email,password}).then((token)=>{
            localStorage.setItem("token",token);
            resolve(token);
        })
    })

    register=(name,email,password)=>this.post("/buyer/registerBuyer",{name,email,password});
    logout=()=>{
        localStorage.removeItem("token","")
    }

    isLoggedIn=()=>{
        return localStorage.getItem("token") ? true : false
    }
    getLoggedInUser=()=>{
        try{
            const jwt=localStorage.getItem("token")
            return jwtDecode(jwt);
        }
        catch(ex){
            return null
        }
    }
}

let userServices = new UserServices;
export default userServices;