import { useEffect, useState } from "react"

export const useForm = (initialForm = {}, formValidations = {}) => {

  //Hooks
  const [formState, setFormState] = useState(initialForm)
  const [formValid, setFormValid] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    createValidators();  
  }, [formState])
  

  const onInputChange = ({target:{ name, value}}) => {
    setFormState({
        ...formState,
        [ name ]: value
    })
  }

  const onResetForm = () =>{
    setFormState( initialForm )
  }

  const createValidators = () => {
    const formCheckedValues = {};

    setIsFormValid(true);
    for (const formField of Object.keys(formValidations)) {
      const [fn, msg='Not valid'] = formValidations[formField]
      
      if(fn(formState[formField])){
        formCheckedValues[`${formField}Valid`] = null
      }else{
        formCheckedValues[`${formField}Valid`] = msg
        setIsFormValid(false)
      }
    }

    setFormValid( formCheckedValues )
  }

  return {
    formState,
    onInputChange,
    onResetForm,
    formValid,
    isFormValid
  }
}