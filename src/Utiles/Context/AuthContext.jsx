import { createContext ,useState } from "react";
import {auth} from"../../firebase"
import {signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";

const userContext=createContext();

export const UserContextProvider=({children})=>{
    let diver=document.createElement("div")
    const rootOfSuccessMessage=document.getElementById("root")
    const appendMessageData=()=>{
        diver.className="Notification";
        diver.innerHTML=`<pre> ✅    SUCCESSED</pre>`
        rootOfSuccessMessage.appendChild(diver)
    }
    const rmvElement=()=>{
        diver.remove();
    }
    const navigate=useNavigate()
    const [user,setUser]=useState(false)
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const handleLogIn=async(e)=>{
        e.preventDefault()
        try{
           await signInWithEmailAndPassword(auth,email,password)
            appendMessageData();
            setTimeout(rmvElement ,1000)
            setTimeout(navigate, 2000,"/");
            setUser(true)
            setEmail("")
            setPassword("")

        }catch(err){
            alert(err.message)
        }
    }
    const handleSignUp= async(e)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            appendMessageData();
            setTimeout(rmvElement ,1000)
            setTimeout(navigate, 2000,"/login");
            setEmail("")
            setPassword("")
            
        } catch (err){
            alert(err.message)
        }
    }
    const handleLogOut=async(e)=>{
        try{
            await signOut()
            appendMessageData();
            setTimeout(rmvElement ,1000)
            setTimeout(navigate, 2000,"/");
            setUser(false)
        }catch(err){
            alert(err.message)
        }

    }
    return (
        <userContext.Provider value={{handleLogIn , handleSignUp , handleLogOut ,setEmail,setPassword,email,password ,user}}>
            {children}
        </userContext.Provider>
    )
}
export default userContext