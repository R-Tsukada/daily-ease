import React from 'react'

interface CardProps {
  children: string
}


const QuestionsCard: React.FC<CardProps> = ({ children }) => (
  <div className="max-w-sm w-full lg:max-w-full lg:flex">
    <div className="border border-gray-400 bg-red-500 p-4">
      <div className="mb-4">
        <div className="text-white font-bold text-xl mt-2">{ children }</div>
      </div>
    </div>
  </div>
)

export default QuestionsCard
