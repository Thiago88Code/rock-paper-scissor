
export enum OptionActionKind {
    UPDATE_PLAYER_CHOICE = 'UPDATE_PLAYER_CHOICE',
    UPDATE_COMPUTER_CHOICE = 'UPDATE_COMPUTER_CHOICE',
    RUN_TIMER = 'RUN_TIMER',
    PLAYER_WINS = 'PLAYER_WINS',
    COMPUTER_WINS = 'COMPUTER_WINS',
    DRAW = 'DRAW',
}

interface UpdatePlayerChoice {
    type: OptionActionKind.UPDATE_PLAYER_CHOICE
    payload: number
}

interface UpdateComputerChoice {
    type: OptionActionKind.UPDATE_COMPUTER_CHOICE
    payload: number
}

interface RunTimer {
    type: OptionActionKind.RUN_TIMER
    payload: boolean
}

interface PlayerWins {
    type: OptionActionKind.PLAYER_WINS
    payload: string
}

interface ComputerWins {
    type: OptionActionKind.COMPUTER_WINS
    payload: string
}

interface Draw {
    type: OptionActionKind.DRAW
    payload: string
}

export type ActionTypes =
    UpdatePlayerChoice //HandSelection -> selectOption()
    | UpdateComputerChoice // PlayButton -> play()
    | RunTimer // PlayButton -> play()
    | PlayerWins //checkWinner
    | ComputerWins //checkWinner
    | Draw //checkWinner
