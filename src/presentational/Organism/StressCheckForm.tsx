import React from 'react';
import AnswerButtonList from '../Molecule/AnswerButtonList';

function StressCheckForm({ currentQuestion, onSubmit }) {
  return (
    <>
      <p className='text-xl font-bold text-violet-500 mb-1'>
        Question
        {currentQuestion.id}
      </p>
      <p>{currentQuestion.text}</p>
      <AnswerButtonList onButtonClick={onSubmit} />
    </>
  );
}

export default StressCheckForm;
