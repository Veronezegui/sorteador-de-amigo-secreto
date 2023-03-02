import { useRecoilValue } from "recoil"
import { prizeDrawResult } from "../atom"

export const useRaffleResult = () => {
    return useRecoilValue(prizeDrawResult)
}