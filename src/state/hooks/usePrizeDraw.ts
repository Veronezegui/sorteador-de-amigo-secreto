import { useSetRecoilState } from "recoil"
import { prizeDrawResult } from "../atom"
import { playPrizeDraw } from "../helpers/playPrizeDraw"
import { useParticipantsList } from "./useParticipantsList"

export const usePrizeDraw = () => {
    const participants = useParticipantsList()

    const setResult = useSetRecoilState(prizeDrawResult)

    return () => {
        const result = playPrizeDraw(participants)
        setResult(result)
    }
}