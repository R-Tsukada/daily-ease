import React from 'react'

interface CardProps {
  children: string
}

const QuestionsCard: React.FC<CardProps> = ({ children }) => (
  <div className="max-w-sm w-full lg:max-w-full lg:flex">
    <div className="border rounded-xl border-gray-400 bg-red-500 p-4 my-4">
      <div>
        <div className="text-center text-white font-bold text-xl">{ children }</div>
      </div>
    </div>
  </div>
)

export default QuestionsCard
