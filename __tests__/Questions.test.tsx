import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Questions from '../src/pages/Questions'

describe('Questions', () => {
  beforeEach(() => {
    render(<Questions />)
  })

  it('renders without crashing', () => {
    render(<Questions />)
  })

  it('displays the first question initially', () => {
    expect(screen.getByText(/仕事中、私はしばしば疲れ切ってしまう/)).toBeInTheDocument()
  })

  it('displays the next question when a button is clicked', () => {
    fireEvent.click(screen.getByText('1：全く当てはまらない'))

    expect(screen.getByText(/仕事が終わるころには、わたしはもうクタクタだ/)).toBeInTheDocument()
  })

  it('displays the total score after answering the last question', () => {
    const answerText = '1：全く当てはまらない'

    Array(8).fill(answerText).forEach((text: string) => {
      fireEvent.click(screen.getByText(text))
    })

    expect(screen.getByText(/合計点数:8/)).toBeInTheDocument()
  })
})

