// StressCheckForm.test.js
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import StressCheckForm from './StressCheckForm'

const mockFn = jest.fn()

const sampleQuestion = {
  id: 1,
  text: '仕事中、私はしばしば疲れ切ってしまう'
}

describe('StressCheckForm', () => {
  it('renders without crashing', () => {
    render(<StressCheckForm currentQuestion={sampleQuestion} onSubmit={mockFn} />)
  })

  it('displays the correct question id and text', () => {
    const { getByText } = render(<StressCheckForm currentQuestion={sampleQuestion} onSubmit={mockFn} />)

    expect(getByText(`Question${sampleQuestion.id}`)).toBeInTheDocument()
    expect(getByText(sampleQuestion.text)).toBeInTheDocument()
  })

  it('renders the AnswerButtonList component with the correct onSubmit prop', () => {
    const { getByTestId } = render(<StressCheckForm currentQuestion={sampleQuestion} onSubmit={mockFn} />)

    const answerButtonList = getByTestId('answer-button-list')
    expect(answerButtonList).toBeInTheDocument()
  })
})

