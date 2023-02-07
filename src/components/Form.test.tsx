import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

it("should not be able to add new participants when the input is empty", () => {
    render(<Form/>)

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    const button = screen.getByRole("button")

    expect(input).toBeInTheDocument()

    expect(button).toBeDisabled()
})