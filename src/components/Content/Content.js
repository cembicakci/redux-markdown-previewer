import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './style.css'

import { useSelector } from 'react-redux'

function Content() {

  const markdownText = useSelector(state => state.text.markdownText)
  console.log(markdownText)


  return (
    <div className='content'>
      <textarea placeholder='Please write anything here...' className='content-left' />

      <div className='content-right'>
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
      </div>


    </div>
  )
}

export default Content