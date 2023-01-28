import React from 'react'

type ExpandingImageProps = {
    src: string
}
export const ExpandingImage = ({ src }: ExpandingImageProps) => {

    return (
        <div className="expanding-image-container">
            <img src={src} className="expanding-image"/>
        </div>
        
    )
}