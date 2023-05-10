import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HandSelection } from "./HandSelection";
import { FaRegHandPaper } from "react-icons/fa"
import userEvent from "@testing-library/user-event"
import { OptionsProvider } from "../context/optionContext";


vi.mock("./HandSelection.module.css", () => {
    return {
        default: {
            choiceBtn: "choiceBtn",
            activeChoice: "activeChoice"
        }
    }
})

describe('HandSelection', () => {
    it('should render the HandSelection component with the rigth props', async () => {
        const user = userEvent.setup();
        render(
            <OptionsProvider>
                <HandSelection
                    name="paper"
                    icon={<FaRegHandPaper data-testid="paper" />}
                    handChoiceIndex={2}
                />
            </OptionsProvider>
        )
        const hand = screen.getByText(/paper/i);
        const icon = screen.getByTestId("paper");
        await user.click(hand)

        expect(hand).toBeInTheDocument();
        expect(icon).toBeVisible();
        expect(hand).toHaveClass('activeChoice')
    })

})