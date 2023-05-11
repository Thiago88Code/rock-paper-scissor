
import { ScoreAndResults } from './sections/ScoreAndResults';
import styles from "./App.module.css";
import { ChooseAndPlay } from './sections/ChooseAndPlay';

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h2>ROCK, PAPER, SCISSORS</h2>
        <p>React Typescript Game</p>
      </div>
      <ScoreAndResults />
      <ChooseAndPlay />
    </div>
  )
}

export default App
