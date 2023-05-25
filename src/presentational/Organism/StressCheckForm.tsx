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
      <h2 className='font-semibold'>仕事のストレスチェックテスト</h2>
      <div className='flex flex-col w-72 mx-auto p-2'>
        <p className='text-xs mb-2'>{ currentQuestionIndex + 1 } / { totalQuestions }</p>
        <LineProgressBar
          percent={progress}
          rounded={36}
          height={18}
        />
      </div>
      <p className='text-xl font-semibold text-violet-500 mb-1 mt-3'>
        Question - {currentQuestion.id}
      </p>
      <p className='font-medium w-60 mx-auto mb-3'>{currentQuestion.text}</p>
      <AnswerButtonList onButtonClick={onSubmit} />
    </>
  )
};

export default StressCheckForm;
