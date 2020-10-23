import React from 'react'

export default function MainContent({children, content}) {
return (<header className={content}>{children}</header>
    )
}

MainContent.defaultProps = {
    content:'defaultContent'
}
