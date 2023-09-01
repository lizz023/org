import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map para recorrer el arreglo
    // arreglo.map ( () =>{
        //return <option></option>
    //}) 

    const equipos = [
    ]

    const manejarCambios = (e) => {
        console.log("Cambio",e.target.value)
        props.actualizarEquipo(e.target.value);
    }
     
    return <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select value={props.valor} onChange={manejarCambios}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props. equipos.map( (equipo, posicion) => <option key={posicion} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;