import Button from '../atoms/Button'

function AnswerButtonList({ onButtonClick }) {
  const answers = ['1：全く当てはまらない', '2：あまり当てはまらない', 'どちらともいえない', '4：当てはまる', '5：非常に当てはまる'];

  return (
    <div>
      {answers.map((answer, index) => (
        <Button key={answer} onClick={() => onButtonClick(index + 1)}>
          {answer}
        </Button>
      ))}
    </div>
  )
}

export default AnswerButtonList
