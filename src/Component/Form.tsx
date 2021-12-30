import { ReactForm } from 'react-forms'
import React from 'react'
import { myconfig ,formValidation, actionConfig} from './myconfig'

export const MyReactComponent = () => {
    // const config = myconfig
    
   const myInitialValues = [{ myTextField: 12 }]
  const pios= [{valueKey : "hs"}]
    const setid =(idx:string):void=>{
        console.log(idx) 
        
        

      }
    return (
        <div>
            <ReactForm
                config={myconfig}
                myInitialValues={myInitialValues}
                validationSchema = {formValidation}
                onSubmit={(values: string) => setid(values) }
            /></div>)
}