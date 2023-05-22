import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UwewsQuestions from '../src/pages/UwesQuestions'

describe('UwewsQuestions', () => {
  beforeEach(() => {
    render(<UwewsQuestions />)
  })

  it('renders without crashing', () => {
    render(<UwewsQuestions />)
  })

  it('displays the first question initially', () => {
    expect(screen.getByText(/私の仕事は私に活力を与えます。/)).toBeInTheDocument()
  })

  it('displays the next question when a button is clicked', () => {
    fireEvent.click(screen.getByText('0：決して'))

    expect(screen.getByText(/仕事をするとき、私は自分自身を疲れていると感じます。/)).toBeInTheDocument()
  })

  it('displays the total score after answering the last question', () => {
    const answerText = '0：決して'

    Array(9).fill(answerText).forEach((text: string) => {
      fireEvent.click(screen.getByText(text))
    })

    expect(screen.getByText(/平均点数:1/)).toBeInTheDocument()
  })
})

