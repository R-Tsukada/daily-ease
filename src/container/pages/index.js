import React, { useState } from 'react';
import StressCheckForm from '../../presentational/Organism/StressCheckForm';

const questions = [
  { id: 1, text: '仕事中、私はしばしば疲れ切ってしまう' },
  { id: 2, text: '仕事が終わるころには、わたしはもうクタクタだ' },
  { id: 3, text: '朝起きたとき、わたしはすでに疲れている' },
  { id: 4, text: '新しいことに取り組む元気がないことがよくある' },
  { id: 5, text: '仕事中、わたしは時々感情が抑えられなくなる' },
  { id: 6, text: 'わたしは仕事に対する興味が次第に失われいくのを感じる' },
  { id: 7, text: '仕事に対して懐疑的な考えが頭をよぎることがある' },
  { id: 8, text: '仕事に対する情熱が薄れてきてると感じる' },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleSubmit = (score) => {
    if (currentQuestion < questions.length - 1) {
      setTotalScore(totalScore + score);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTotalScore(totalScore + score);
      setIsFinished(true);
    }
  };

  return (
    <div>
      <h2>仕事のストレスチェック</h2>
      {!isFinished ? (
        <StressCheckForm
          currentQuestion={questions[currentQuestion]}
          onSubmit={handleSubmit}
        />
      ) : (
        <h2>
          合計点数:
          {totalScore}
        </h2>
      )}
    </div>
  );
}
