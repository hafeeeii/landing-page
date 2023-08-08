import React from 'react'

export default function Nav() {
  return (
    <nav>
    <div className="logo">
      <img src="\images\brand_logo.png" alt="Logo" />
    </div>

    <ul>
      <li href='#' >menu</li>
      <li href='#' >location</li>
      <li href='#' >about</li>
      <li href='#' >contact</li>
    </ul>
    <button>Login</button>
  </nav>
  )
}
