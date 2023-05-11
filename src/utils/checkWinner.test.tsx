import { render, screen } from "@testing-library/react"
import { vi } from "vitest"
import { checkWinner } from "./checkWinner"
import { useEffect, useReducer } from "react"
import scoreReducer from "../reducers/scoreReducer"
import { initialState } from "../context/initialstateContextValues"


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
                winner: "Winner!!!",
                message: ""
            }
        }
    }
})

interface Iprops {
    playerHand: string,
    computerHand: string
}


function TestingComponent(props: Iprops) {
    const [state, dispatch] = useReducer(scoreReducer, initialState)

    useEffect(() => {
        checkWinner(dispatch, props.playerHand, props.computerHand)
    }, [])

    return (
        <>
            <p>playerhand: {state.playerHand}</p>
            <p>computerhand: {state.computerHand}</p>
            <p>winner: {state.results.winner}</p>
            <p>message: {state.results.message}</p>
        </>
    )
}

describe('checkWinner Draw cases', () => {
    it('Should update the reducer as: winner: "No one"; message: "No one Wins! We have a draw!". Double "rock" case', () => {
        render(<TestingComponent playerHand="rock" computerHand="rock" />)
        expect(screen.getByText('winner: No one')).toBeInTheDocument()
        expect(screen.getByText('message: No one Wins! We have a draw!')).toBeInTheDocument()
    })
    it('Should update the reducer as: winner: "No one"; message: "No one Wins! We have a draw!".Double "paper" case', () => {
        render(<TestingComponent playerHand="paper" computerHand="paper" />)
        expect(screen.getByText('winner: No one')).toBeInTheDocument()
        expect(screen.getByText('message: No one Wins! We have a draw!')).toBeInTheDocument()
    })
    it('Should update the reducer as: winner: "No one"; message: "No one Wins! We have a draw!".Double "scissors" case', () => {
        render(<TestingComponent playerHand="scissors" computerHand="scissors" />)
        expect(screen.getByText('winner: No one')).toBeInTheDocument()
        expect(screen.getByText('message: No one Wins! We have a draw!')).toBeInTheDocument()
    })
})

describe('checkWinner Player wins case', () => {
    it('Should update the reducer as: winner: "Player"; message: "Player Wins! Paper beats rock!"', () => {
        render(<TestingComponent playerHand="paper" computerHand="rock" />)

        expect(screen.getByText('winner: Player')).toBeInTheDocument()
        expect(screen.getByText('message: Player Wins! Paper beats rock!')).toBeInTheDocument()
    })
    it('Should update the reducer as: winner: "Player"; message: "Player Wins! Rock beats scissors!"', () => {
        render(<TestingComponent playerHand="rock" computerHand="scissors" />)

        expect(screen.getByText('winner: Player')).toBeInTheDocument()
        expect(screen.getByText('message: Player Wins! Rock beats scissors!')).toBeInTheDocument()
    })
    it('Should update the reducer as: winner: "Player"; message: "Player Wins! Scissors beats paper!"', () => {
        render(<TestingComponent playerHand="scissors" computerHand="paper" />)

        expect(screen.getByText('winner: Player')).toBeInTheDocument()
        expect(screen.getByText('message: Player Wins! Scissors beats paper!')).toBeInTheDocument()
    })
})

describe('checkWinner Computer wins case', () => {
    it('Should update the reducer as: winner: "Computer"; message: "Computer Wins! Paper beats rock!"', () => {
        render(<TestingComponent playerHand="rock" computerHand="paper" />)
        expect(screen.getByText('winner: Computer')).toBeInTheDocument()
        expect(screen.getByText('message: Computer Wins! Paper beats rock!')).toBeInTheDocument()
    })
    it('Should update the reducer as: winner: "Computer"; message: "Computer Wins! Rock beats scissors!"', () => {
        render(<TestingComponent playerHand="scissors" computerHand="rock" />)
        expect(screen.getByText('winner: Computer')).toBeInTheDocument()
        expect(screen.getByText('message: Computer Wins! Rock beats scissors!')).toBeInTheDocument()
    })
    it('Should update the reducer as: winner: "Computer"; message: "Computer Wins! Scissors beats paper!"', () => {
        render(<TestingComponent playerHand="paper" computerHand="scissors" />)
        expect(screen.getByText('winner: Computer')).toBeInTheDocument()
        expect(screen.getByText('message: Computer Wins! Scissors beats paper!')).toBeInTheDocument()
    })
})





