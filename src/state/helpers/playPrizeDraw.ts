import shuffle from "just-shuffle"

export function playPrizeDraw(participants: string[]) {
    const participantsTotal = participants.length
    const random = shuffle(participants)
    const result = new Map<string, string>()

    for (let index = 0; index < participantsTotal; index++) {
        const friendIndex = index === (participantsTotal - 1) ? 0 : index + 1;
        result.set(random[index], random[friendIndex])
    }

    return result
}