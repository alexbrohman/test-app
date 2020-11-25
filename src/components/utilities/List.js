import React from "react"

const List = ({ title, children }) => {
    return (
        <div className="lit-wrap">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default List
