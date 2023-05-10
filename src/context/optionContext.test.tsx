import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { OptionsProvider, useOptions } from './optionContext'
// 1 - faço um mock
// esse mock assume o initialState sem precisar importá-lo
vi.mock('./initialstateContextValues', () => {
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

// 2 - monto o componente de teste 
// o useOptions() vai buscar o meu mock, ou seja o "optionContext.state" aponta para para o mock acima
function TestingComponent() {
    const optionContext = useOptions()

    return (
        <>
            <p>playerhand: {optionContext.state.playerHand}</p>
            <p>computerhand: {optionContext.state.computerHand}</p>
            <p>winner: {optionContext.state.results.winner}</p>
        </>
    )
}

// 3 - renderizo o componente dentro do <OptionsProvider> 
describe('scoreReducer', () => {
    it('should render the component with the context initial values', () => {
        render(
            <OptionsProvider>
                <TestingComponent />
            </OptionsProvider>
        )
        expect(screen.getByText(/playerhand: 2/i)).toBeInTheDocument();
        expect(screen.getByText(/computerhand: 0/i)).toBeInTheDocument();
        expect(screen.getByText(/Winner!!!/i)).toBeInTheDocument();
    })
})

// Poderia não criar o mock, mas ele é útil para mostrar q o objeto inicial pode ser alterado através do "Context"