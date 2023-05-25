import React, { FC, useState } from 'react'
import Link from 'next/link'
import StressCheckForm from '../presentational/Organism/StressCheckForm'
import BackButton from '../presentational/atoms/BackButton'

interface OlbiQuestions {
  id: number
  text: string
}

const questions: OlbiQuestions[] = [
  { id: 1, text: '仕事中、私はしばしば疲れ切ってしまう' },
  { id: 2, text: '仕事が終わるころには、わたしはもうクタクタだ' },
  { id: 3, text: '朝起きたとき、わたしはすでに疲れている' },
  { id: 4, text: '新しいことに取り組む元気がないことがよくある' },
  { id: 5, text: '仕事中、わたしは時々感情が抑えられなくなる' },
  { id: 6, text: 'わたしは仕事に対する興味が次第に失われいくのを感じる' },
  { id: 7, text: '仕事に対して懐疑的な考えが頭をよぎることがある' },
  { id: 8, text: '仕事に対する情熱が薄れてきてると感じる' },
]

const OlbiQuestions: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const handleSubmit = (score: number) => {
    if (currentQuestion < questions.length - 1) {
      setTotalScore(totalScore + score)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setTotalScore(totalScore + score)
      setIsFinished(true)
    }
  }

  let message: string

  if (totalScore > 32) {
    message = '仕事での疲労ややりがいに問題が出ているかも。リフレッシュする方法を探しましょう'
  } else if (totalScore > 16) {
    message = '仕事に対するストレスを感じているかもしれません。リラックスする時間を作ることを検討してみてください'
  } else {
    message = '現在のところ仕事での問題はなさそうです！'
  }


  return (
    <div className="flex justify-center min-h-screen">
      <div className='mt-3'>
        <div className='text-center mt-3'>
          {!isFinished ? (
            <StressCheckForm
              currentQuestion={questions[currentQuestion]}
              onSubmit={handleSubmit}
              totalQuestions={questions.length}
              currentQuestionIndex={currentQuestion}
            />
          ) : (
            <div>
              <p className='text-xl font-bold'>合計点数:{totalScore}</p>
              <p className='font-medium w-60 mx-auto mt-3 mb-5'>{message}</p>
            </div>
          )}
        </div>
        <div className='text-center mt-5'>
          <Link href='/'><BackButton>トップページに戻る</BackButton></Link>
        </div>
      </div>
    </div>
  )
}

export default OlbiQuestions
