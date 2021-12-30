import {ReactForm} from 'react-forms'
import React from 'react'

export const MyReactComponent = () => {
const myConfig = [{
type : 'text',
valueKey : 'myTextField',
fieldProps : { label : 'Sample Text Field' , fullWidth: true } ,
// fieldProps:{ ...textFieldProps },
styles : { margin : '0 auto'}
} ]
const myInitialValues = [{ myTextField : '' }]
return ( <div>
<ReactForm
config={myConfig}
// initialValues={myInitialValue}
onSubmit = {(values : object) => {console.log(values)}}  
/></div> )
}