import { createContext ,useState ,useEffect } from "react";
import {auth, db} from"../../firebase"
import {signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut ,onAuthStateChanged} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import {doc ,setDoc} from "firebase/firestore"
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
    const [user,setUser]=useState(null)
    const navigate=useNavigate()
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const handleLogIn=(e)=>{
        e.preventDefault()
        try{
            appendMessageData();
            setTimeout(rmvElement ,1000)
            setTimeout(navigate, 2000,"/");
            setUser(email)
            setEmail("")
            setPassword("")

           return signInWithEmailAndPassword(auth,email,password)

        }catch(err){
            alert(err.message)
        }
    }
    //check if user Change or not to avoid resignin
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsub();
        }
    })
    const handleSignUp=async (e)=>{
        e.preventDefault()
        try{
            setDoc(doc(db, "userList",email),{
               usersList:[]
           })
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
    const handleLogOut=(e)=>{
        try{
            appendMessageData();
            setTimeout(rmvElement ,1000)
            setTimeout(navigate, 2000,"/");
            return signOut(auth)
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