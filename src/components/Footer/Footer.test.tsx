import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useParticipantsList } from "../../state/hooks/useParticipantsList"
import { Footer } from "./Footer"

jest.mock('../../state/hooks/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

const mockNavegation = jest.fn()
const mockPrizeDraw = jest.fn()

jest.mock('../../state/hooks/usePrizeDraw', () => {
    return {
        usePrizeDraw: () => mockPrizeDraw
    }
})

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegation
    }
})

describe("when insuficient participants", () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    })

    it("should not be able to start", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe("when suficient participants", () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(["Ana", "Pedro", "Raúl"])
    })

    it("should start the raffle", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })

    it("should move to the prize draw page", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(mockNavegation).toHaveBeenCalledTimes(1)
        expect(mockNavegation).toHaveBeenCalledWith("/prizeDraw")
        expect(mockPrizeDraw).toHaveBeenCalledTimes(1)
    })
})