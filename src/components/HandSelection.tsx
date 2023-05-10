import { useState } from 'react';
import { useOptions } from '../context/optionContext';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import styles from './HandSelection.module.css';


interface IProps {
  name: string
  icon: JSX.Element
  handChoiceIndex: number
}

export const HandSelection: React.FC<IProps> = ({ name, icon, handChoiceIndex }) => {
  const [handPressed, setHandPressed] = useState<boolean>(false)
  const { dispatch, state } = useOptions();
  
  const selectedHandIndex = state.playerHand
 // selecOption captura  o index
 // aciona o dispatch q vai atraves do "type" trocar o numero do "playerHand" atual pelo "payload"
  const selectOption = (index: number) => {
    dispatch({ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: index })
    setHandPressed(true)
    console.log(state)
  }

  return (
    <>{/*Hackzin - sobreposiçao de classe do css*/}
      <button className={`${styles.choiceBtn} ${handPressed && handChoiceIndex === selectedHandIndex ? styles.activeChoice : ''}`}
        onClick={() => selectOption(handChoiceIndex)}>
        {name}
        {icon}
      </button>
    </>
  )
}
