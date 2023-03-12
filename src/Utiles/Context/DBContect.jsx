import { addDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, {  useContext, useState,useEffect } from 'react'
import { createContext } from 'react'
import { db } from '../../firebase'
import userContext from './AuthContext'
const dbContext=createContext()
export const DBContectProvider = ({children}) => {
  const {user}=useContext(userContext)
  const [list,setList]=useState()
  const dataCollector= doc(db,"userList",`${user?.email}`)
  // get data
    useEffect(() => {
        onSnapshot(dataCollector,snapshot=>{
            setList(snapshot?.data()?.usersList)
        })
        
    }, [user?.email])
    //add Elem
    const addData=async(ele)=>{
      let newData=list? [...list] :[] 
      newData.push(ele)
  
      try{
        updateDoc(dataCollector,{
          usersList:newData
        })
      }catch(err){
        alert(err.message)
      }
    }
    const deleteShow=async(ndx)=>{
      try{
        const newDoc= list?.filter((ele ,indx)=>
          ndx !==indx)
          await updateDoc(dataCollector,{
            usersList:newDoc,
          })
        
      }catch(err){
        alert(err.message)
      }
    }

  return (
    <dbContext.Provider value={{list,addData}}>
        {children}
    </dbContext.Provider>  )
}

export  default dbContext