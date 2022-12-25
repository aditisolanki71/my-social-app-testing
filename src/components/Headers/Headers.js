import React from 'react'
import "./Headers.css"

export default function Header({
    title
}) {
    return (
        <>
            {/* Unit Test and testId Test */}
            <h1 
                className="header" 
                title="headerTitle" 
                data-testid="headerTestId"
            >{title}</h1>
        </>
    )
}
