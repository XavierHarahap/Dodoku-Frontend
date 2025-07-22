import React from 'react'

interface PostCardProps {
  image: string
  title: string
  excerpt: string
  date: string
  author: string
  category?: string
}

const PostCard: React.FC<PostCardProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author, 
  category 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex p-4">
      {/* Image */}
      <div className="relative w-36 h-28 flex-shrink-0 overflow-hidden rounded-xl mr-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-1">
        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Meta info */}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24" style={{color: '#9A3DAB'}}>
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            {date}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24" style={{color: '#9A3DAB'}}>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            {author}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard 