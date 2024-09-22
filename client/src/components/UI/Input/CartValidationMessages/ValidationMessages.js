import React from 'react'

function ValidationMessages({messages}) {
    console.log(messages)
    return (
        <div>
            {messages.length > 0 ? messages.map(msg => <p className="text-danger">{msg}</p>) : null }
        </div>
    )
}

export default ValidationMessages
