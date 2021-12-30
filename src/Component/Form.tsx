import { ReactForm } from 'react-forms'
import React, { useState } from 'react'
import { myconfig, formValidation, actionConfig } from './myconfig'

export const MyReactComponent = () => {
  // const config = myconfig
const [myconfig1,setmyconfig1] = useState(myconfig)
  const myInitialValues = [{ myTextField: 10 }]
  const pios = [{ valueKey: "hs" }]
  const setid = (idx: string): void => {
    console.log(idx)
    console.log(myconfig)
    myconfig.values = { ...myconfig, myTextField: 12 };
    setmyconfig1(myconfig)
    console.log(myconfig)
  }
  return (
    <div>
      <ReactForm
        config={myconfig1}
        myInitialValues={myInitialValues}
        validationSchema={formValidation}
        onSubmit={(values: string) => setid(values)}
      /></div>)
}