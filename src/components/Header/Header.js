import React from 'react'
import './style.css'

function Header() {
  return (
    <header>
      <h1 className='header-title'>Markdown Previewer</h1>
      <div className='header-btn'>
        <i class="fa-solid fa-question" aria-hidden='true'></i>
      </div>
    </header>
  )
}

export default Header