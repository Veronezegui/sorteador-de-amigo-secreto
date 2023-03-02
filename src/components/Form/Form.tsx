import { useRef, useState } from "react"
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";
import "./style.scss"

export function Form() {
    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const addToList = useAddParticipant();

    const errorMessage = useErrorMessage();

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addToList(name)
        setName('')
        inputRef.current?.focus()
    }

    return (
        <>
            <form onSubmit={addParticipant}>
                <div className="formContent">
                    <input
                        className="input"
                        ref={inputRef}
                        type="text"
                        placeholder="Insira os nomes dos participantes"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <button disabled={!name} className="button">Adicionar</button>
                </div>
                {errorMessage && <p className="error" role="alert">{errorMessage}</p>}
            </form>
        </>
    )
}