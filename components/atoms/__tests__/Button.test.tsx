import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  test('renders children and responds to click events', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>'1：全く当てはまらない'</Button>)

    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled()
  });
});

