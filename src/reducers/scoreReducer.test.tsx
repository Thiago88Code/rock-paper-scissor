import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { initialState } from '../context/initialstateContextValues'
import { useEffect, useReducer } from 'react'
import scoreReducer from './scoreReducer'
import { ActionTypes, OptionActionKind } from './scoreReducerTypes'


vi.mock('../context/initialstateContextValues', () => {
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
                winner: "",
                message: ""
            }
        }
    }
})

interface IProps {
    myActions: ActionTypes
}

function TestingComponent(props: IProps) {
    const [state, dispatch] = useReducer(scoreReducer, initialState)

    useEffect(() => {
        dispatch(props.myActions)
    }, [])

    return (
        <div>
            playerhand: {state.playerHand}
            computerhand: {state.computerHand}
            computerhand: {state.computerHand}
            message: {state.results.message}
            winner: {state.results.winner}
        </div>
    )
}

describe('scoreReducer', () => {
    it('should update the scoreReducer with the correct playerhand', () => {
        render(<TestingComponent myActions={{ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 1 }} />)

        expect(screen.getByText(/playerhand: 1/)).toBeInTheDocument();

    })
    it('should update the scoreReducer with the correct computerHand', () => {
        render(<TestingComponent myActions={{ type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: 2 }} />)

        expect(screen.getByText(/computerhand: 2/i)).toBeInTheDocument();

    })
    it('should update the scoreReducer with the Player wins', () => {
        render(<TestingComponent myActions={{ type: OptionActionKind.PLAYER_WINS, payload: 'Player Wins! Rock beats scissors!' }} />)

        expect(screen.getByText(/winner: Player/i)).toBeInTheDocument();
        expect(screen.getByText(/message: Player Wins! Rock beats scissors!/i)).toBeInTheDocument();

    })
    it('should update the scoreReducer with the Draw', () => {
        render(<TestingComponent myActions={{ type: OptionActionKind.DRAW, payload: 'No one Wins! We have a draw!' }} />)

        expect(screen.getByText(/winner: No one/i)).toBeInTheDocument();
        expect(screen.getByText(/message: No one Wins! We have a draw!/i)).toBeInTheDocument();

    })
    it('should update the scoreReducer with the Computer wins', () => {
        render(<TestingComponent myActions={{ type: OptionActionKind.COMPUTER_WINS, payload: 'Computer Wins! Paper beats rock!' }} />)

        expect(screen.getByText(/winner: Computer/i)).toBeInTheDocument();
        expect(screen.getByText(/message: Computer Wins! Paper beats rock!/i)).toBeInTheDocument();
    })

})