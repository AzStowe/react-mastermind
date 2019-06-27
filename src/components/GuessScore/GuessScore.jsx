import React from 'react'
import './GuessScore.css'

const GuessScore = ({ score }) => {
    let scores = (
        'P'.repeat(score.perfect) +
        'A'.repeat(score.almost) +
        'I'.repeat(4 - score.perfect - score.almost)
    ).split('')
    let baseStyle = {
        width: 10,
        height: 10,
        margin: 1,
        border: '2px solid',
        borderRadius: '50%',
    }

    return (
        <div className="GuessScore">
            {scores.map((score, idx) => (
                <div key={idx}>{score}</div>
            ))}
        </div>
    )
}

export default GuessScore
