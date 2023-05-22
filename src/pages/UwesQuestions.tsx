import React, { FC, useState } from 'react'
import Link from 'next/link'
import EnrichmentStressCheckForm from '../presentational/Organism/EnrichmentCheckForm'
import BackButton from '../presentational/atoms/BackButton'

interface UwesQuestions {
  id: number
  text: string
}

const questions: UwesQuestions[] = [
  { id: 1, text: '私の仕事は私に活力を与えます。' },
  { id: 2, text: '仕事をするとき、私は自分自身を疲れていると感じます。' },
  { id: 3, text: '私の仕事に没頭すると、時間がとても早く過ぎていくと感じます。' },
  { id: 4, text: '仕事をするとき、私は自分が活力に満ちていると感じます。' },
  { id: 5, text: '私は自分の仕事に献身的であると感じます。' },
  { id: 6, text: '私は自分の仕事に没頭すると感じます。'},
  { id: 7, text: '私の仕事は私にエネルギーを与えます。' },
  { id: 8, text: '私は自分の仕事に夢中になれると感じます。' },
  { id: 9, text: '私は自分の仕事に情熱を持って取り組めると感じます。' },
]

const UwesQuestions: FC = () => {
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

  return (
    <div className="flex justify-center min-h-screen">
      <div className='mt-3'>
        <div className='text-center mt-3'>
          {!isFinished ? (
            <EnrichmentStressCheckForm
              currentQuestion={questions[currentQuestion]}
              onSubmit={handleSubmit}
              totalQuestions={questions.length}
              currentQuestionIndex={currentQuestion}
            />
          ) : (
            <h3 className='text-xl font-bold'>
              平均点数:
              {(totalScore / questions.length)}
            </h3>
          )}
        </div>
        <div className='text-center'>
          <Link href='/'><BackButton>トップページに戻る</BackButton></Link>
        </div>
      </div>
    </div>
  )
}

export default UwesQuestions
