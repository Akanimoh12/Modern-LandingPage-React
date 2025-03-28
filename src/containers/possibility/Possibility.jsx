import React from 'react';
import Possibility from '../../assets/possibility.svg'
import './possibility.css'

export default function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={Possibility} alt="possibility" />

      </div>
    </div>
  )
}
