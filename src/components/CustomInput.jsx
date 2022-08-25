import React, { useImperativeHandle } from 'react';

function CustomInput({ style, ...props }, ref) {
    useImperativeHandle(ref, () => {
        return { alertHi: () => alert("Hi") }
    }, [])

    return (
        <div>
            <input
                {...props}
                style={{
                    border: "none",
                    backgroundColor: "lightpink",
                    ...style,
                }} />
        </div>
    )
}

export default React.forwardRef(CustomInput);