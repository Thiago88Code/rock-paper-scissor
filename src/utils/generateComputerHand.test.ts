import { describe } from 'vitest'
import { generateComputerHand } from '../utils/generateComputerHand'


describe('scoreReducer', () => {
    it('should generate a random number between 0 and 2', () => {
        const randomNumber = generateComputerHand()

        expect(randomNumber).toBeLessThanOrEqual(2);
        expect(randomNumber).toBeGreaterThanOrEqual(0);

    })
})
