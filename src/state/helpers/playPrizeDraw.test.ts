import { playPrizeDraw } from "./playPrizeDraw"

describe("Accomplish secret friend giveaway", () => {
    it("should not be able to a participant raffle his own name", () => {

        const participants = [
            "Ana",
            "Catarina",
            "Juliana",
            "João",
            "Vinicius",
            "Nathália"
        ]

        const raffle = playPrizeDraw(participants)
        participants.forEach(participant => {
            const secretFriend = raffle.get(participant)
            expect(secretFriend).not.toEqual(participant)
        })
    })
})