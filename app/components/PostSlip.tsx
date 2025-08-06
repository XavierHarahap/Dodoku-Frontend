import React from 'react'
import { CalendarIcon, PersonIcon } from './icons'

interface PostSlipProps {
  image: string
  title: string
  excerpt: string
  date: string
  author: string
}

const PostSlip: React.FC<PostSlipProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 max-w-lg p-6">
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-2">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-4 text-center">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-5 text-center">
          {excerpt}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center">
            <CalendarIcon className="w-4 h-auto mr-2 ml-20" />
            {date}
          </span>
          <span className="flex items-center mr-20">
            <PersonIcon className="w-4 h-auto mr-2" />
            {author}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostSlip