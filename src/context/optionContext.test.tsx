import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { OptionsProvider, useOptions } from './optionContext'

vi.mock('./initialstateContextValues', () => {
    return {
        initialState: {
            playerHand: 2,
            computerHand: 0,
            runTimer: false,
            score: {
                player: 0,
                computer: 0
            },
            results: {
                winner: "Winner!!!",
                message: ""
            }
        }
    }
})

function TestingComponent() {
    const optionContext = useOptions()

    return (
        <>
            <p>playerhand: {optionContext.state.playerHand}</p>
            <p>computerhand: {optionContext.state.computerHand}</p>
            <p>winner: {optionContext.state.results.winner}</p>
        </>
    )
}

describe('scoreReducer', () => {
    it('should render the component with the context initial values', () => {
        render(
            <OptionsProvider>
                <TestingComponent />
            </OptionsProvider>
        )
        expect(screen.getByText(/playerhand: 2/i)).toBeInTheDocument();
        expect(screen.getByText(/computerhand: 0/i)).toBeInTheDocument();
        expect(screen.getByText(/Winner!!!/i)).toBeInTheDocument();
    })
})

