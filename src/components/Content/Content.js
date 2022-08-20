import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './style.css'

import { useSelector, useDispatch } from 'react-redux'
import { setMarkDownText } from '../../redux/textSlice'

function Content() {
  const dispatch = useDispatch()

  const markdownText = useSelector(state => state.text.markdownText)
  console.log(markdownText)


  return (
    <div className='content'>
      <textarea className='content-left' value={markdownText} onChange={(e) => dispatch(setMarkDownText(e.target.value))}/>

      <div className='content-right'>
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
      </div>


    </div>
  )
}

export default Content