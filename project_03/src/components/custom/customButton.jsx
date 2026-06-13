import React from 'react'

const CustomButton = (props) => {
    return (
        <button

            className="w-full text-sm font-semibold text-white mt-3"
            style={{
                padding: '12px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                letterSpacing: '0.02em',
            }}
        >
            {props.title}
        </button>
    )
}

export default CustomButton