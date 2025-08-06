import React from 'react'
import { CalendarIcon, PersonIcon } from './icons'

interface PostCardProps {
  image: string
  title: string
  excerpt: string
  date: string
  author: string
  href?: string
}

import Link from 'next/link'

const PostCard: React.FC<PostCardProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author,
  href
}) => {
  const Wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    href ? (
      <Link href={href} className="block">{children}</Link>
    ) : (
      <>{children}</>
    )
  )

  return (
    <Wrapper>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex p-2">
      {/* Image */}
      <div className="relative w-80 h-44 flex-shrink-0 overflow-hidden rounded-xl mr-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col py-3">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2 leading-tight mb-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-xs leading-relaxed flex-1 w-80 line-clamp-4">
          {excerpt}
        </p>

        {/* Meta info */}
        <div className="flex items-center space-x-12 text-xs text-gray-500">
          <span className="flex items-center">
            <CalendarIcon className="w-4 h-auto mr-2" />
            {date}
          </span>
          <span className="flex items-center">
            <PersonIcon className="w-4 h-auto mr-2" />
            {author}
          </span>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

export default PostCard 