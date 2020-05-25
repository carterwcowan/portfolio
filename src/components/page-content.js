import React from 'react'

export default ({ title, content }) => (
  <div className="page-content" id={title.toLowerCase()}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
)
