import { useState } from "react"
import { useParticipantsList } from "../../state/hooks/useParticipantsList"
import { useRaffleResult } from "../../state/hooks/useRaffleResult"
import { Header } from "../../components/Header/Header"
import { Card } from "../../components/Card/Card"
import { Title } from "../../components/Title/Title"
import "./style.scss"
import { Icon } from "@iconify/react"

export function PrizeDrawPage() {
    const [selectedParticipant, setSelectedParticipant] = useState('')
    const [secretFriend, setSecretFriend] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const participants = useParticipantsList()

    const result = useRaffleResult()

    const raffle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (result.has(selectedParticipant)) {
            setSecretFriend(result.get(selectedParticipant)!)
        }
    }

    return (
        <>
            <Header />
            <Card>
                <Title text="Quem vai tirar o papelzinho?" />
                <form onSubmit={raffle}>
                    <div className="container-select" >
                        <div className="select"
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setSecretFriend("");
                            }}
                            role="listbox">
                            {selectedParticipant ? <p>{selectedParticipant}</p> : <p>Selecione o seu nome</p>}
                        </div>
                        {isOpen ? (
                            <div className="select-options">
                                {participants.map(participant => (
                                    <option key={participant} value={participant} onClick={() => {
                                        setSelectedParticipant(participant)
                                        setIsOpen(!isOpen)
                                    }}>{participant}</option>
                                ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <p className="description">Clique em sortear para ver quem é seu amigo secreto!</p>
                    <button className="start">
                        <Icon icon="mdi:dice-5" fontSize={32} />
                        Sortear
                    </button>
                </form>
                {secretFriend && <p className="secret-friend" role="alert">Amigo secreto: {secretFriend}</p>}
                <img src="/aviao.png" alt="avião" />
            </Card>
        </>
    )
}