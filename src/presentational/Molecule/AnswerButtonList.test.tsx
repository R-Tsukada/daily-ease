import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AnswerButtonList from './AnswerButtonList'

describe('AnswerButtonList', () => {
  it('renders without crashing', () => {
    const mockFn = jest.fn()
    render(<AnswerButtonList onButtonClick={mockFn} />)
  })

  it('renders the expected number of buttons', () => {
    const mockFn = jest.fn()
    const { getAllByRole } = render(<AnswerButtonList onButtonClick={mockFn} />)
    const buttons = getAllByRole('button')
    expect(buttons.length).toBe(5)
  })

  it('displays correct text on each button', () => {
    const mockFn = jest.fn()
    const { getByText } = render(<AnswerButtonList onButtonClick={mockFn} />)
    const answerTexts = [
      '1：全く当てはまらない',
      '2：あまり当てはまらない',
      '3:どちらともいえない',
      '4：当てはまる',
      '5：非常に当てはまる'
    ]

    answerTexts.forEach((answerText) => {
      expect(getByText(answerText)).toBeInTheDocument()
    })
  })

  it('calls the onButtonClick function with correct argument when a button is clicked', () => {
    const mockFn = jest.fn()
    const { getByText } = render(<AnswerButtonList onButtonClick={mockFn} />)
    const button = getByText('1：全く当てはまらない')

    fireEvent.click(button)
    expect(mockFn).toHaveBeenCalledWith(1)
  })
})

