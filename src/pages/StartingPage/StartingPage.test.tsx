import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

describe("Starting Page", () => {
    it("should render correctly", () => {
        const { container } = render(
            <RecoilRoot>

            </RecoilRoot>
        )
        expect(container).toMatchSnapshot()
    })
})