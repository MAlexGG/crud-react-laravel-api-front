import React from 'react';

export const Message = ({ msg, bgColor }) => {
    let styles = {
        padding: "1rem",
        margin: "5rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "10px",
        width: "200px",
        backgroundColor: bgColor
    };

    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}
