import styles from './PlayButton.module.css';
import { useOptions } from '../context/optionContext';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import { generateComputerHand } from '../utils/generateComputerHand';


export const PlayButton = () => {
    const optionContext = useOptions()
    const { dispatch } = optionContext
    const { selectedHand } = optionContext.state

    const play = () => {
        dispatch({ type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: generateComputerHand() })
        if (selectedHand) {
            dispatch({ type: OptionActionKind.RUN_TIMER, payload: true })
        } else {
            return
        }
    }

    return (
        <>
            <button className={styles.playBtn} onClick={play}>Play</button>
        </>
    )
}