import { errorState, participantsListState } from "../atom"
import { useSetRecoilState, useRecoilValue } from "recoil";

export const useAddParticipant = () => {
    const setList = useSetRecoilState(participantsListState)
    const list = useRecoilValue(participantsListState)
    const setError = useSetRecoilState(errorState)
    return (participantName: string) => {
        if (list.includes(participantName)) {
            setError("Nomes duplicados não são permitidos!")
            setTimeout(() => {
                setError("")
            }, 5000)

            return setList(currentList => [...currentList])
        }
        return setList(currentList => [...currentList, participantName])
    }
} 