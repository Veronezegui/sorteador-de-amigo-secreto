import { RecoilRoot } from "recoil"
import { render, screen } from "@testing-library/react";
import { ParticipantsList } from "./ParticipantsList";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

jest.mock('../../state/hooks/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

describe("Empty Participants List", () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    })
    it("should render an empty list of participants", () => {
        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole("listitem")
        expect(itens).toHaveLength(0)
    })
})

describe("Participants List", () => {
    const participants = ["Ana", "Catarina"]
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants)
    })
    it("should render a list with two participants", () => {

        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participants.length)
    })
})