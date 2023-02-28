import { useParticipantsList } from "../../state/hooks/useParticipantsList"
import "./style.scss";

export function ParticipantsList() {
    const participants: string[] = useParticipantsList()

    return (
        <ul className="list">
            {participants.map(participant => <li className="item" key={participant}>{participant}</li>)}
        </ul>
    )
}