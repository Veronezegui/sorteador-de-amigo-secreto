import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Form } from "./Form";

describe("Form tests", () => {
    it("should not be able to add new participants when the input is empty", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    
        const button = screen.getByRole("button")
    
        expect(input).toBeInTheDocument()
    
        expect(button).toBeDisabled()
    })
    
    it("should be able to add a new participant if there is a name", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    
        const button = screen.getByRole("button")
    
        fireEvent.change(input, {
            target: {
                value: "Guilherme"
            }
        })
    
        fireEvent.click(button)
    
        expect(input).toHaveFocus()
        
        expect(input).toHaveValue("")
    })
    
    it("should not be able to add a existing name to the list", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    
        const button = screen.getByRole("button")
    
        fireEvent.change(input, {
            target: {
                value: "Guilherme"
            }
        })
    
        fireEvent.click(button)
    
        fireEvent.change(input, {
            target: {
                value: "Guilherme"
            }
        })
    
        fireEvent.click(button)
    
        const errorMessage = screen.getByRole('alert')
        expect(errorMessage.textContent).toBe("Nomes duplicados não são permitidos!")
    })
    
    it("should remove the error message after 3 seconds", () => {
        jest.useFakeTimers()
    
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    
        const button = screen.getByRole("button")
    
        fireEvent.change(input, {
            target: {
                value: "Guilherme"
            }
        })
    
        fireEvent.click(button)
    
        fireEvent.change(input, {
            target: {
                value: "Guilherme"
            }
        })
    
        fireEvent.click(button)
        let errorMessage: HTMLElement | null = screen.getByRole('alert')
        expect(errorMessage).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers() 
        })
    
        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()
    })
})
