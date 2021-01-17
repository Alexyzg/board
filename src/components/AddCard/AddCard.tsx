import React from 'react'

import './AddCard.scss'

const justConsoleLog = (e: React.ChangeEvent<HTMLDivElement>) => {
  const text = e.target.innerText
  return text
}

export const AddCard: React.FC = () => {
  return (
    <div className="add-card">
      <div
        className="add-card__input"
        contentEditable="true"
        onInput={justConsoleLog}
      >
        Type in me
      </div>
      <div className="add-card__buttons">
        <div>Save</div>
        <div>Close</div>
      </div>
    </div>
  )
}
