import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuestionBtn } from '../../redux/textSlice';

import './style.css'

function Header() {

  const dispatch = useDispatch();
  const questionBtn = useSelector(state => state.text.questionBtn)

  function showHelp(){
    dispatch(setQuestionBtn())
    console.log(questionBtn)
  }

  return (
    <header>
      <h1 className='header-title'>Markdown Previewer</h1>
      <div className={`header-btn ${questionBtn ? 'active' : ''}`} onClick={showHelp}>
        <i className="fa-solid fa-question" aria-hidden='true'></i>
      </div>
    </header>
  )
}

export default Header