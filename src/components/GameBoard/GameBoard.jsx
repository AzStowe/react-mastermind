import React from 'react';
import GuessRow from '../GuessRow/GuessRow'

const GameBoard = props => (
    <div className='component'>
        <div>GameBoard</div>
        <div><GuessRow /></div>
        <div><GuessRow /></div>
    </div>
)

export default GameBoard;