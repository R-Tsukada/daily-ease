import React from 'react';

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const AnswerButton: React.FC<ButtonProps> = ({ onClick, children }) => <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 text-xs py-2 border border-gray-400 rounded-full shadow w-48 px-auto my-2" onClick={onClick}>{children}</button>;

export default AnswerButton;
