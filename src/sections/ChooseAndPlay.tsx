import { HandSelection } from '../components/HandSelection';
import { useOptions } from '../context/optionContext';
import styles from './ChooseAndPlay.module.css';
import { PlayButton } from '../components/PlayButton.tsx';

export const ChooseAndPlay = () => {

    const OptionsContext = useOptions()

    const HandOptionsArray = OptionsContext.options.map((hand, i) => {
        return <HandSelection name={hand.name} icon={hand.icon} handChoiceIndex={i} />
    })

    return (
        <>
            <div className={styles.choiceBtnCtn}>
                {HandOptionsArray}
            </div>
            <PlayButton/>
        </>
    )
}
