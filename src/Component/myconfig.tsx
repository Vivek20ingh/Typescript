import * as Yup from 'yup'
import { ReactForm } from 'react-forms'

export const formValidation = Yup.object({
    // myTextField3: Yup.string().required('required'),
    myTextField: Yup.number().max(20)
})

export const myconfig = [
    {
        type: 'text',
        valueKey: 'myTextField',
        fieldProps: { label: 'Sample Text Field', fullWidth: true },
        styles: { margin: '0 auto' }
    },
    // {
    //     type: 'text',
    //     valueKey: 'myTextField3',
    //     fieldProps: { label: 'Sample Text Field2', fullWidth: true },
    //     styles: { margin: '0 auto' }
    // },
    // {
    //     type : 'select',
    //     valueKey: 'mySelect',
    //     fieldProps : { options :[{name : 'Abc' , value : 'abc'} , {name : 'XYZ' , value : 'xyz'}]},
    //     styles : { width : '50%' }
    // },
    // {
    //     type: 'checkbox',
    //     valueKey: 'myCheckbox',
    //     fieldProps: {
    //         options: [{ name: 'Abc', value: 'abc' }, { name: 'XYZ', value: 'xyz' }],
    //         header: 'My Checkbox Header',
    //     }
    // },
    // {
    //     type: 'radio',
    //     valueKey: 'myRadio',
    //     fieldProps: {
    //         options: [{ name: 'Abc', value: 'abc' }, { name: 'XYZ', value: 'xyz' }],
    //     }
    // },
    // {
    //     type: 'switch',
    //     valueKey: 'mySwitch',
    //     fieldProps: {
    //         label: 'Demo Switch'
                   
    //     }
    // },
    // {
    //     type : 'password' ,
    //     valueKey : 'myPasswordField',	  
    //     fieldProps :{
    //         label : 'Enter password',
    //     }
    // },
    // {
	// 	type: 'file',
	// 	valueKey: 'myFile',
	// 	fieldProps:{
	// 		// readAs: 'readAsBinaryString' | 'readAsDataURL' | 'readAsArrayBuffer' | 'readAsText',
	// 		// encoding: "abc",
	// 		disabled: false,
	// 		multiple: true,
	// 		accept: "yes",
	// 		disableDefaultTooltip: false,
	// 		invisible: false,
	// 		// onFilesChange: (files: FileList) => void 
	// 		// onDone?: (imgFiles: TFile[], remFiles?: File[]) => void
	// 		// wrapWith?: (input: JSX.Element) => JSX.Element,
	// 		// nativeInputProps?: React.InputHTMLAttributes<{}>,
	// 	}
	// },
    // {
    //     type: 'mui-plain-text',
    //     valueKey: 'doNotIgnoreThisProperty',
    //     fieldProps:{ 
    //         isTextHtmlString : false,
    //         text: "Please read all the terms of this agreement.",
    //         // typographyProps?: TypographyProps,
    //         className: 'my-formatted-text',
    //     }
    // },
   

]

export const actionConfig={
    submitButtonText : "Submit",
    submitButtonLayout : 'center',
    submitButtonProps : {disabled:false},
    // loaderProps : {},
    // actionContent : Custom JSX Component
}