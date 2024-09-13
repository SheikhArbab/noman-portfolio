import React from 'react'

interface Props {
    className?: string
}

const Button: React.FC<Props> = ({ className = '' }) => {
    return (
        <button>:React.FC </button>
    )
}


export default Button;