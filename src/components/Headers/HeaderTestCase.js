import React from 'react'
import "./Headers.css"

export default function HeaderTestCase({
    title
}) {
    return (
        <>
            {/* Unit Test */}
            <h1 className="header" data-testid="header-2">{title}</h1>
            <h6 className='header'>Aditi</h6>
         
            <h1 className="header" data-testid="header-2">Moni</h1>

            {/* Semantic Test */}
            <h6 title="aditiTitle" className='header'>Aditi Solanki</h6>
            
            {/* TestId */}
            <h6 className="header" data-testid="header-1">Test</h6> 
        </>
    )
}
