import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import { useRaffleResult } from "../../state/hooks/useRaffleResult";
import { PrizeDrawPage } from "./index";


jest.mock('../../state/hooks/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

jest.mock('../../state/hooks/useRaffleResult', () => {
    return {
        useRaffleResult: jest.fn()
    }
})


describe("On prize draw page", () => {
    const participants = [
        "Ana",
        "Catarina",
        "Jorel"
    ]

    const result = new Map([
        ["Ana", "Jorel"],
        ["Jorel", "Catarina"],
        ["Catarina", "Ana"]
    ])

    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants);
        (useRaffleResult as jest.Mock).mockReturnValue(result)
    })

    it("should be able to show all friends", () => {
        render(
            <RecoilRoot>
                <PrizeDrawPage />
            </RecoilRoot>
        )

        const select = screen.getByRole("listbox")
        fireEvent.click(select)

        const options = screen.queryAllByRole('option')

        expect(options).toHaveLength(participants.length)
    })

    it("should render the secret friend", () => {
        render(
            <RecoilRoot>
                <PrizeDrawPage />
            </RecoilRoot>
        )

        const select = screen.getByRole("listbox")
        fireEvent.click(select)

        const option = screen.getByText("Ana")
        fireEvent.click(option)

        const button = screen.getByRole("button")
        fireEvent.click(button)

        const secretFriend = screen.getByRole("alert")
        expect(secretFriend).toBeInTheDocument()
    })
})