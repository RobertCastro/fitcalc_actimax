import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";

const IMC = () => {

    const [FormularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [IMC, setIMC] = useState(0)
	
	return (
		<>
        <Formik
            initialValues={{
                altura: '',
                peso: ''
            }}
            validate={(valores) => {
                let errores = {}
                if (!valores.altura) {
                    errores.altura = "Por favor ingresa tú altura"
                } else if(!/^[0-9]/.test(valores.altura)) {
                    errores.altura = "Solo se permite numeros"
                }
                if (!valores.peso) {
                    errores.peso = "Por favor ingresa tú peso"
                } else if(!/^[0-9]/.test(valores.peso)) {
                    errores.peso = "Solo se permiten números"
                }
                return errores
            }}
            onSubmit={(valores, {resetForm}) =>{

                let altura = Math.round(valores.altura) / 100
                let peso = Math.round(valores.peso)
                let res = (peso / Math.pow(altura, 2)).toFixed(2)

                cambiarFormularioEnviado(true)
                setIMC(res)
            }}
        >

            { ({values, errors, touched, handleChange, submitForm, handleBlur}) => (

                <Form className="formulario" >
                    <div>
                        <label htmlFor="altura">Altura</label>
                        <Field 
                            type="number" 
                            id="altura" 
                            name="altura" 
                            placeholder="175"
                            onChange={(e) => {
                                handleChange(e);
                                setTimeout(submitForm, 0);
                            }}
                        />
                        <ErrorMessage name='altura' component={() => (
                            <div className="error">{errors.altura}</div>
                        )} />
                    </div>
                    <div>
                        <label htmlFor="peso">Peso</label>
                        <Field 
                            type="number" 
                            id="peso" 
                            name="peso" 
                            placeholder="74"
                            onChange={(e) => {
                                handleChange(e);
                                setTimeout(submitForm, 0);
                            }}
                        />
                        <ErrorMessage name='peso' component={() => (
                            <div className="error">{errors.peso}</div>
                        )} />
                    </div>

                    { FormularioEnviado && <p className='exito'>IMC: {IMC} </p> }

                </Form>

            )}

        </Formik>
			
		</>
	);
}
 
export default IMC;