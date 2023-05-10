import { createContext, useContext, useReducer } from 'react';
import { HandOption, Ioptions, IoptionsContext, Props } from './optionsContextTypes';
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';
import scoreReducer from '../reducers/scoreReducer';
import { initialState } from './initialstateContextValues';


const options: Ioptions[] = [
    { name: HandOption.rock, icon: <FaRegHandRock size={60} data-testid="rock"/> },
    { name: HandOption.paper, icon: <FaRegHandPaper size={60} data-testid="paper"/> },
    { name: HandOption.scissors, icon: <FaRegHandScissors size={60} data-testid="scissors"/> },

]

// context
const OptionsContext = createContext<IoptionsContext>({
    options: [],
    state: initialState,
    dispatch: () => {},
})

// context provider
export function OptionsProvider(props: Props) {
    const [state, dispatch] = useReducer(scoreReducer, initialState)

    const contextValue = {
        options,
        state,
        dispatch
    };

    return <OptionsContext.Provider value={contextValue}>{props.children}</OptionsContext.Provider>
}

// hook in order to use my context out of hear
export function useOptions() {
    const context = useContext(OptionsContext)
    return context
}
