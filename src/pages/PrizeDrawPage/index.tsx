import { useState } from "react"
import { useParticipantsList } from "../../state/hooks/useParticipantsList"
import { useRaffleResult } from "../../state/hooks/useRaffleResult"

export function PrizeDrawPage() {
    const [selectedParticipant, setSelectedParticipant] = useState('')
    const [secretFriend, setSecretFriend] = useState('')

    const participants = useParticipantsList()

    const result = useRaffleResult()

    const raffle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (result.has(selectedParticipant)) {
            setSecretFriend(result.get(selectedParticipant)!)
        }
    }

    return (
        <section>
            <form onSubmit={raffle}>
                <select
                    required
                    name="participant"
                    id="participant"
                    placeholder="Selecione o seu nome"
                    value={selectedParticipant}
                    onChange={event => setSelectedParticipant(event.target.value)}
                >
                    {participants.map(participant => (
                        <option key={participant} value={participant}>{participant}</option>
                    ))}
                </select>
                <button>Sortear</button>
            </form>
            {secretFriend && <p role="alert">{secretFriend}</p>}
        </section>
    )
}