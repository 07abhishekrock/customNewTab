import React, { useState } from 'react'

type FormStateProps<T> = {
     initialFormState : T ,
     render : (formState : T , setFormState : React.Dispatch<React.SetStateAction<T>>) => JSX.Element
}

function FormState<T>({initialFormState , render} : FormStateProps<T>) {

     const [formState , setFormState] = useState(initialFormState);

     return render(formState , setFormState);

}

export default FormState