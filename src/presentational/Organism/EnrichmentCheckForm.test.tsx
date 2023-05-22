import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import EnrichmentCheckForm from './EnrichmentCheckForm'

const sampleQuestion = {
  id: 1,
  text: '私の仕事は私に活力を与えます。'
}

const mockFn = jest.fn()

describe('EnrichmentCheckForm', () => {
  it('renders without crashing', () => {
    render(<EnrichmentCheckForm currentQuestion={sampleQuestion} onSubmit={mockFn} totalQuestions={10} currentQuestionIndex={0} />)
  })

  it('displays the correct question id and text', () => {
    const { getByText } = render(<EnrichmentCheckForm currentQuestion={sampleQuestion} onSubmit={mockFn} />)

    expect(getByText(`Question${sampleQuestion.id}`)).toBeInTheDocument()
    expect(getByText(sampleQuestion.text)).toBeInTheDocument()
  })

  it('renders the AnswerButtonList component with the correct onSubmit prop', () => {
    const { getByTestId } = render(<EnrichmentCheckForm currentQuestion={sampleQuestion} onSubmit={mockFn} />)

    const uwesAnswerButtonList = getByTestId('uwes-answer-button-list')
    expect(uwesAnswerButtonList).toBeInTheDocument()
  })
})

