import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props) => {

    console.log(props)

    //Estado -Hoks
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostrar", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/selector.png" alt="selector" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;