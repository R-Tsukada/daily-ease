import React, { FC } from 'react';
import { LineProgressBar } from '@frogress/line'
import UwesAnswerButtonList from '../Molecule/UwesAnswerButtonList';

interface CurrentQuestion {
  id: number;
  text: string;
}

interface EnrichmentCheckFormProps {
  currentQuestion: CurrentQuestion;
  onSubmit: (value: unknown) => void;
  totalQuestions: number;
  currentQuestionIndex: number;
}


const EnrichmentCheckForm: FC<EnrichmentCheckFormProps> = ({ currentQuestion, onSubmit, totalQuestions, currentQuestionIndex }) => {
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;

  return (
    <>
      <h2 className='font-semibold'>仕事の充実度チェックテスト</h2>
      <div className='flex flex-col w-72 mx-auto p-2'>
        <p className='text-xs mb-2'>{ currentQuestionIndex + 1 } / { totalQuestions }</p>
        <LineProgressBar
          className='md:w-1 px-5'
          percent={progress}
          rounded={36}
          height={36}
        />
      </div>
      <p className='text-xl font-semibold text-violet-500 mb-1 mt-3'>
        Question - {currentQuestion.id}
      </p>
      <p className='font-medium w-60 mx-auto mb-3'>{currentQuestion.text}</p>
      <UwesAnswerButtonList onButtonClick={onSubmit} />
    </>
  )
};

export default EnrichmentCheckForm;
