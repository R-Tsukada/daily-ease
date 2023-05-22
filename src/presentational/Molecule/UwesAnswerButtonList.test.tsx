import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import UwesAnswerButtonList from './UwesAnswerButtonList'

describe('UwesAnswerButtonList', () => {
  it('renders without crashing', () => {
    const mockFn = jest.fn()
    render(<UwesAnwserButtonList onButtonClick={mockFn} />)
  })

  it('renders the expected number of buttons', () => {
    const mockFn = jest.fn()
    const { getAllByRole } = render(<UwesAnswerButtonList onButtonClick={mockFn} />)
    const buttons = getAllByRole('button')
    expect(buttons.length).toBe(8)
  })

  it('displays correct text on each button', () => {
    const mockFn = jest.fn()
    const { getByText } = render(<UwesAnswerButtonList onButtonClick={mockFn} />)
    const answerTexts = [
      '0：決して',
      '1：あまり当てはまらない',
      '2:どちらともいえない',
      '3：たまに',
      '4：時々',
      '5：頻繁に',
      '6：ほとんど常に',
      '7：常に'
    ]

    answerTexts.forEach((answerText) => {
      expect(getByText(answerText)).toBeInTheDocument()
    })
  })

  it('calls the onButtonClick function with correct argument when a button is clicked', () => {
    const mockFn = jest.fn()
    const { getByText } = render(<UwesAnswerButtonList onButtonClick={mockFn} />)
    const button = getByText('0：決して')

    fireEvent.click(button)
    expect(mockFn).toHaveBeenCalledWith(1)
  })
})

