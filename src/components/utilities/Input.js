import React from "react"

const Input = ({ name, placeholder, onChange, value }) => {
    return (
        <div className="input-wrap">
            <label htmlFor={name}></label>
            <input
                onChange={onChange}
                placeholder={placeholder}
                type="text"
                name={name}
                value={value}
            />
        </div>
    )
}

export default Input
