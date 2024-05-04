import React from 'react';

const ContentHeader = (props) => {
    return (
        <div className='content__header'>
            <h1>{props.contentTitle}</h1>
            <p className='light-gray-text'>{props.contentDescription}</p>
        </div>
    )
}

export default ContentHeader;