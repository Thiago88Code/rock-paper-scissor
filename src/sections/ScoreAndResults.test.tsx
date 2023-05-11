import { describe, it, vi } from "vitest";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { OptionsProvider } from "../context/optionContext";
import { ScoreAndResults } from "./ScoreAndResults";
import { ChooseAndPlay } from "./ChooseAndPlay";
//import { generateComputerHand } from "../utils/generateComputerHand";


describe('ScoreAndResults', () => {

    vi.mock('../utils/generateComputerHand.ts', () => ({
        generateComputerHand: () => 0,
    }))

    it('should display 2 seconds on the screen after we wait 1 second', () => {
        vi.useFakeTimers()
        render(
            <OptionsProvider>
                <ScoreAndResults />
                <ChooseAndPlay />
            </OptionsProvider>
        )

        const hand = screen.getByText(/paper/i)
        expect(hand).toBeInTheDocument();

        fireEvent.click(hand)
        fireEvent.click(screen.getByText("Play"))

        act(() => {
            vi.advanceTimersByTime(1000)
        })

        screen.debug()

        expect(screen.getByTestId("timer")).toHaveTextContent("2")
    })

    it('should display 1 second on the screen after we wait 2 second', () => {
        vi.useFakeTimers()
        render(
            <OptionsProvider>
                <ScoreAndResults />
                <ChooseAndPlay />
            </OptionsProvider>
        )

        const hand = screen.getByText(/paper/i)
        expect(hand).toBeInTheDocument();

        fireEvent.click(hand)
        fireEvent.click(screen.getByText("Play"))

        act(() => {
            vi.advanceTimersByTime(2000)
        })

        screen.debug()

        expect(screen.getByTestId("timer")).toHaveTextContent("1")
    })

    it('should display the score, icon and message after we wait 3 second. Player wins case', () => {
        vi.useFakeTimers()
        render(
            <OptionsProvider>
                <ScoreAndResults />
                <ChooseAndPlay />
            </OptionsProvider>
        )

        const hand = screen.getByText(/paper/i)
        expect(hand).toBeInTheDocument();

        fireEvent.click(hand)
        fireEvent.click(screen.getByText("Play"))

        act(() => {
            vi.advanceTimersByTime(3000)
        })

        screen.debug()

        expect(screen.getByText(/Player wins/i)).toBeInTheDocument()//message
        expect(screen.getByText(/Paper beats rock!/i)).toBeInTheDocument()//message
        expect(screen.getByText(/Player:1/i)).toBeInTheDocument()//score
        expect(screen.getByText(/Computer:0/i)).toBeInTheDocument()//score
        // pick the first "paper" up, from the top to bottom.
        expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible()//icons
        expect(screen.getAllByTestId(/paper/i)[0]).toBeVisible()//icons

        expect(screen.getAllByTestId(/paper/i)).toHaveLength(2)//icons

    })
    it('should display the score, icon and message after we wait 3 second. Computer wins case', () => {
        vi.useFakeTimers()
        render(
            <OptionsProvider>
                <ScoreAndResults />
                <ChooseAndPlay />
            </OptionsProvider>
        )

        const hand = screen.getByText(/scissors/i)
        expect(hand).toBeInTheDocument();

        fireEvent.click(hand)
        fireEvent.click(screen.getByText("Play"))

        act(() => {
            vi.advanceTimersByTime(3000)
        })

        screen.debug()

        expect(screen.getByText(/Computer wins/i)).toBeInTheDocument()//message
        expect(screen.getByText(/Rock beats scissors!/i)).toBeInTheDocument()//message
        expect(screen.getByText(/Player:0/i)).toBeInTheDocument()//score
        expect(screen.getByText(/Computer:1/i)).toBeInTheDocument()//score
        // pick the first "paper" up, from the top to bottom.
        expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible()//icons
        expect(screen.getAllByTestId(/scissors/i)[0]).toBeVisible()//icons

        expect(screen.getAllByTestId(/scissors/i)).toHaveLength(2)//icons

    })
    
})