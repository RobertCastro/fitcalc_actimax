import { Formik } from "formik";

const Formulario = () => {
	
	return (
		<>
        <Formik
            initialValues={{
                altura: '',
                peso: ''
            }}
            onSubmit={() =>{
                console.log("Hola")
            }}
        >

            { ({values, handleSubmit}) => (

                <form className="formulario" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Altura</label>
                    <input 
                        type="text" 
                        id="altura" 
                        name="altura" 
                        placeholder="175" 
                        value={values.nombre} 
                    />
                </div>
                <div>
                    <label htmlFor="nombre">Peso</label>
                    <input 
                        type="text" 
                        id="peso" 
                        name="peso" 
                        placeholder="74" 
                        value={values.correo} 
                    />
                </div>

                <button type="submit">Enviar</button>

                </form>

            )}

        </Formik>
			
		</>
	);
}
 
export default Formulario;