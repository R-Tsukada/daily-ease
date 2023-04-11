import { useState } from 'react';

const questions = [
  { id: 1, text: '仕事中、私はしばしば疲れ切ってしまう' },
  { id: 2, text: '仕事が終わるころには、わたしはもうクタクタだ' },
  { id: 3, text: '朝起きたとき、わたしはすでに疲れている' },
  { id: 4, text: '新しいことに取り組む元気がないことがよくある' },
  { id: 5, text: '仕事中、わたしは時々感情が抑えられなくなる' },
  { id: 6, text: 'わたしは仕事に対する興味が次第に失われいくのを感じる' },
  { id: 7, text: '仕事に対して懐疑的な考えが頭をよぎることがある' },
  { id: 8, text: '仕事に対する情熱が薄れてきてると感じる' }
]

export default function Home () {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const handleSubmit = (score) => {
    if (currentQuestion < questions.length - 1) {
      setTotalScore(totalScore + score)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setTotalScore(totalScore + score)
      setIsFinished(true)
    }
  }

  const questionsList = ['1：全く当てはまらない', '2：あまり当てはまらない', 'どちらともいえない', '4：当てはまる', '5：非常に当てはまる']

  return (
    <div>
      <h2>仕事のストレスチェック</h2>
      {!isFinished
        ? (
          <>
            <p>Question{questions[currentQuestion].id}</p>
            <p>{questions[currentQuestion].text}</p>
            <p>{ totalScore }</p>
            <p>{ setTotalScore }</p>
            <div>
              {questionsList.map((score, index) => (
                <button key={score} onClick={() => handleSubmit(index + 1)}>
                  {score}
                </button>
              ))}
            </div>
          </>
          ) : (
            <h2>合計点数: {totalScore}</h2>
          )}
    </div>
  )
}
