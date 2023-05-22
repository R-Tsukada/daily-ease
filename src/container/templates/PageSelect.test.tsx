import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageSelect from './StressCheckPageSelect';

describe('OlbiQuestions', () => {
  beforeEach(() => {
    render(<PageSelect />);
  });

  it('renders without crashing', () => {
    render(<PageSelect />);
  });

  it('displays the first question initially', () => {
    expect(screen.getByText(/仕事のストレスチェック/)).toBeInTheDocument();
  });
});
