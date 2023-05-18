import { useEffect, useState } from 'react';
import styles from './ScoreAndResults.module.css';
import { useOptions } from '../context/optionContext';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import { checkWinner } from '../utils/checkWinner';
import { spliter } from '../utils/spliter';

export const ScoreAndResults = () => {

    const [timer, setTimer] = useState<number>(3)

    const optionContext = useOptions()
    const { runTimer } = optionContext.state
    const { dispatch } = optionContext
    const { message } = optionContext.state.results
    const { winner } = optionContext.state.results

    const playerHandIndex = optionContext.state.playerHand
    const playerHandName = optionContext.options[playerHandIndex].name
    const playerHandIcon = optionContext.options[playerHandIndex].icon
    const playerScore = optionContext.state.score.player


    const computerHandIndex = optionContext.state.computerHand
    const computerHandName = optionContext.options[computerHandIndex].name
    const computerHandIcon = optionContext.options[computerHandIndex].icon
    const computerScore = optionContext.state.score.computer


    useEffect(() => {
        if (runTimer) {
            const newIntervalId = setInterval(() => {
                setTimer((previousTimer) => {
                    if (previousTimer === 1) {
                        clearInterval(newIntervalId)
                    }
                    return previousTimer - 1
                })
            }, 1000)
        }

    }, [runTimer])

    useEffect(() => {
        if (timer === 0) {
            setTimer(3)
            dispatch({ type: OptionActionKind.RUN_TIMER, payload: false })
            checkWinner(dispatch, playerHandName, computerHandName)
        }
    }, [timer])

    return (
        <>
            <div className={styles.scoreCtn}>
                <div className={styles.score}>
                    <h3>Score</h3>
                    <p>Player: {playerScore}</p>
                </div>
                <div className={styles.score}>
                    <h3>Score</h3>
                    <p>Computer: {computerScore}</p>
                </div>
            </div>

            <div className={styles.results}>
                <div className={`${styles.playerHand} ${winner === 'Player' ? styles.winnerAnimation : ''}`}>
                    <div className={styles.playerShake} data-testid="playerShake">
                        {runTimer && optionContext.options[0].icon}
                    </div>
                    {!runTimer && playerHandIcon && (
                        <>
                            <div>{playerHandIcon}</div>
                            <p>{playerHandName}</p>
                        </>
                    )}
                </div>

                <div className={styles.midCol} data-testid="timer">
                    {runTimer ?
                        <h1>{timer}</h1>
                        :
                        <>
                            <h2> {spliter(message, "! ", 0)}</h2>
                            <p> {spliter(message, "! ", 1)}</p>
                        </>
                    }
                </div>

                <div className={`${styles.computerHand} ${winner === 'Computer' ? styles.winnerAnimation : ''}`}>
                    <div className={styles.computerShake} data-testid="computerShake">
                        {runTimer && optionContext.options[0].icon}
                    </div>
                    {winner !== "" && (
                        <>
                            <div>{computerHandIcon}</div>
                            <p>{computerHandName}</p>
                        </>
                    )}
                </div>
            </div >
        </>
    )
}

