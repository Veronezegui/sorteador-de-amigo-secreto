import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Icon } from "@iconify/react"

export function Footer() {

    const participants = useParticipantsList()

    const navigate = useNavigate()

    const start = () => {
        navigate("/prizeDraw")
    }

    return (
        <footer>
            <button className="start" onClick={start} disabled={participants.length < 3}>
                <Icon icon="material-symbols:play-circle-outline" fontSize={40} />
                <p>Iniciar brincadeira</p>
            </button>
            <img src="/sacolas.png" alt="sacolas" />
        </footer>
    )
}