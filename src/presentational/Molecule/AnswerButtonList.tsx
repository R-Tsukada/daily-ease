import React from 'react'
import AnswerButton from '../atoms/AnswerButton'

interface AnswerButtonListProps {
  onButtonClick: (value: number) => void
}

const AnswerButtonList: React.FC<AnswerButtonListProps> = ({ onButtonClick }) => {
  const answers = [
    '1：全く当てはまらない',
    '2：あまり当てはまらない',
    '3:どちらともいえない',
    '4：当てはまる',
    '5：非常に当てはまる',
  ]

  return (
    <div className='flex flex-col items-center' data-testid="answer-button-list">
      {answers.map((answer, index) => (
        <AnswerButton key={answer} onClick={() => onButtonClick(index + 1)}>
          {answer}
        </AnswerButton>
      ))}
    </div>
  )
}

export default AnswerButtonList
