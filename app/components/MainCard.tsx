import React from 'react'
import { CalendarIcon, PersonIcon } from './icons'

interface MainCardProps {
  image: string
  title: string
  excerpt: string
  date: string
  author: string
  category?: string
}

const MainCard: React.FC<MainCardProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author, 
  category 
}) => {
  return (
    <div className="relative w-full h-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Content Overlay Box */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          {/* Category Badge */}
          {category && (
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-2"
              style={{backgroundColor: '#8F339C'}}
            >
              {category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>

          {/* Meta info */}
          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <span className="flex items-center ml-1">
              <CalendarIcon className="w-4 h-auto mr-1" />
              {date}
            </span>
            <span className="flex items-center">
              <PersonIcon className="w-4 h-auto mr-1" />
              {author}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard 