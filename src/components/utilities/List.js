import React from "react"

const List = ({ title, children }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="list-wrap">{children}</div>
        </>
    )
}

export default List
