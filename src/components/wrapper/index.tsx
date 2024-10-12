import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export default function Wrapper(props: Props) {
    return (
        <div style={props.style} className={props.className}>
            {props.children}
        </div>
    )
}
