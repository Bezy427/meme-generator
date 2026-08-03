import { useState } from "react";

export default function Headers(props) {
    

    return (
        <header>
            <img src="avatar" alt="avatar" />
            <p>{props.userName}</p>
        </header>
    )
}