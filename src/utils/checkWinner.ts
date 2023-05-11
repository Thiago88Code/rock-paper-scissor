import { ActionTypes, OptionActionKind } from "../reducers/scoreReducerTypes";

export const checkWinner = (
    dispatch: React.Dispatch<ActionTypes>,
    playerHand: string,
    computerHand: string
) => {
    if (playerHand === 'rock' && computerHand === 'rock') { 
        dispatch({ type: OptionActionKind.DRAW, payload: 'No one Wins! We have a draw!' })
    } else if (playerHand === 'paper' && computerHand === 'paper') {
        dispatch({ type: OptionActionKind.DRAW, payload: 'No one Wins! We have a draw!' })
    } else if (playerHand === 'scissors' && computerHand === 'scissors') {
        dispatch({ type: OptionActionKind.DRAW, payload: 'No one Wins! We have a draw!' })
    } else if (playerHand === 'rock' && computerHand === 'paper') {
        dispatch({ type: OptionActionKind.COMPUTER_WINS, payload: 'Computer Wins! Paper beats rock!' })
    } else if (playerHand === 'paper' && computerHand === 'rock') {
        dispatch({ type: OptionActionKind.PLAYER_WINS, payload: 'Player Wins! Paper beats rock!' })
    } else if (playerHand === 'paper' && computerHand === 'scissors') {
        dispatch({ type: OptionActionKind.COMPUTER_WINS, payload: 'Computer Wins! Scissors beats paper!' })
    } else if (playerHand === 'scissors' && computerHand === 'paper') {
        dispatch({ type: OptionActionKind.PLAYER_WINS, payload: 'Player Wins! Scissors beats paper!' })
    } else if (playerHand === 'scissors' && computerHand === 'rock') {
        dispatch({ type: OptionActionKind.COMPUTER_WINS, payload: 'Computer Wins! Rock beats scissors!' })
    } else if (playerHand === 'rock' && computerHand === 'scissors') {
        dispatch({ type: OptionActionKind.PLAYER_WINS, payload: 'Player Wins! Rock beats scissors!' })
    }
}