import React from 'react'

interface CardProps {
  children: string
}

const QuestionsCard: React.FC<CardProps> = ({ children }) => (
  <div className="lg:max-w-full lg:flex">
    <div className="w-72 h-24 border rounded-xl border-gray-300 bg-gradient-to-r from-red-500 to-red-300 mx-auto flex flex-col">
      <p className="text-white font-medium text-sm ml-2 my-auto">{ children }</p>
      <p className='text-xs text-white border-t-2 border-white w-full py-1 pr-2 text-right'>所要時間2分 全8問</p>
    </div>
  </div>
)

export default QuestionsCard
