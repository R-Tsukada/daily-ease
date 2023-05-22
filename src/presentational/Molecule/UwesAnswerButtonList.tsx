import React from 'react'
import AnswerButton from '../atoms/AnswerButton'

interface UwesAnswerButtonListProps {
  onButtonClick: (value: number) => void
}

const UwesAnswerButtonList: React.FC<UwesAnswerButtonListProps> = ({ onButtonClick }) => {
  const answers = [
    '0：決して',
    '1：あまり当てはまらない',
    '2:どちらともいえない',
    '3：たまに',
    '4：時々',
    '5：頻繁に',
    '6：ほとんど常に',
    '7：常に',
  ]

  return (
    <div data-testid="uwes-answer-button-list">
      {answers.map((answer, index) => (
        <AnswerButton key={answer} onClick={() => onButtonClick(index + 1)}>
          {answer}
        </AnswerButton>
      ))}
    </div>
  )
}

export default UwesAnswerButtonList
