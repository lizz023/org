
import "./Campo.css"

const Campo = (props) => {
    const modificar =  `${props.placeholder}...`

    //Destructuracion

    const { type = "text"} = props;
    

    const recibirValor = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label htmlFor="">{props.titulo}</label>
        <input  
            placeholder={modificar} 
            required={props.required} 
            value={props.valor}
            onChange={recibirValor}
            type ={type}
        />
    </div>
}

export default Campo;