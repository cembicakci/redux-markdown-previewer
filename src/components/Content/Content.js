import React from 'react'
import ReactMarkdown from 'react-markdown'
import './style.css'

function Content() {
  return (
    <div className='content'>
      <textarea placeholder='Please write anything here...' className='content-left'/>

      <div className='content-right'>
        <ReactMarkdown>## Hello, *world*!</ReactMarkdown>
      </div>


    </div>
  )
}

export default Content