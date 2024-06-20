import { fireEvent, render, screen } from '@testing-library/react'

import ButtonCounter from './ButtonCounter'

describe('Button Counter', () => {
  it('renders the Button Counter component', () => {
    render(<ButtonCounter label="Add 1" />)
  })

  it('show the label properly', () => {
    const label = "Add 1"
    render(<ButtonCounter label={label} />)

    let buttonElement = screen.getByText(label)

    expect(buttonElement).toBeInTheDocument()
  })

  
  it('shows the initial count as 0', () => {
    render(<ButtonCounter label="Add 1" />)

    let countElement = screen.getByText(/Count: 0/i)

    expect(countElement).toBeInTheDocument()

  })

  it('increments the count when the button is clicked', () => {
    render(<ButtonCounter label="Add 1" />)
    const buttonElement = screen.getByText(/Add 1/i)
    const countElement = screen.getByText(/Count: 0/i)

    expect(countElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

  })

  it('increments the count when the button is clicked n times', () => {
    render(<ButtonCounter label="Add 1" />)
    const buttonElement = screen.getByText(/Add 1/i)
    const countElement = screen.getByText(/Count: 0/i)

    expect(countElement).toBeInTheDocument();

    let random_number = Math.floor(Math.random() * 5) + 1 
    new Array(random_number).fill(null).forEach(
        () => fireEvent.click(buttonElement)
    )

    expect(screen.getByText(`Count: ${random_number}`)).toBeInTheDocument();

  })
})

