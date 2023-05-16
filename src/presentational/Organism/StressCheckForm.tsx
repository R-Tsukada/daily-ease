import React, { FC } from 'react';
import { LineProgressBar } from '@frogress/line'
import AnswerButtonList from '../Molecule/AnswerButtonList';

interface CurrentQuestion {
  id: number;
  text: string;
}

interface StressCheckFormProps {
  currentQuestion: CurrentQuestion;
  onSubmit: (value: unknown) => void;
  totalQuestions: number;
  currentQuestionIndex: number;
}


const StressCheckForm: FC<StressCheckFormProps> = ({ currentQuestion, onSubmit, totalQuestions, currentQuestionIndex }) => {
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;

  return (
    <>
      <p className='text-xl font-bold text-violet-500 mb-1'>
        Question
        {currentQuestion.id}
      </p>
      <LineProgressBar
        className='md:4 px-5'
        percent={progress}
        rounded={36}
        height={36}
      />
      <p>{ currentQuestionIndex + 1 } / { totalQuestions }</p>
      <p className='mt-5 font-bold'>{currentQuestion.text}</p>
      <AnswerButtonList onButtonClick={onSubmit} />
    </>
  )
};

export default StressCheckForm;
