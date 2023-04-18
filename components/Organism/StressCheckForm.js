import React from 'react';
import AnswerButtonList from '../Molecule/AnswerButtonList';

function StressCheckForm({ currentQuestion, onSubmit }) {
  return (
    <>
      <p>
        Question
        {currentQuestion.id}
      </p>
      <p>{currentQuestion.text}</p>
      <AnswerButtonList onButtonClick={onSubmit} />
    </>
  );
}

export default StressCheckForm;
