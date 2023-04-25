import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AnswerButton from '../AnswerButton';

describe('AnswerButton', () => {
  test('renders children and responds to click events', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<AnswerButton onClick={onClick}>&apos;1:全く当てはまらない&apos;</AnswerButton>);

    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
