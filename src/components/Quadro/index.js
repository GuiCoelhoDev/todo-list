import doces from "../../assets/images/doces.jpeg"
import vegetais from "../../assets/images/vegetais.jpeg"
import {Title} from "./styles.js"
const Quadro = () => {
    return (
        <div>

        <Title>Hello Petgato</Title>
            <img src={doces} />

            <img src={vegetais} />

        </div>
    )

}

export default Quadro;