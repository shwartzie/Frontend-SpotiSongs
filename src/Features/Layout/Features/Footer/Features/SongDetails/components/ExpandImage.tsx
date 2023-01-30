import React, { useState } from 'react';

type ExpandingImageProps = {
    src: string;
};
export const ExpandingImage = ({ src }: ExpandingImageProps) => {
    const [isHovering, setHover] = useState<boolean>(false);
    const [isExpanding, setExpand] = useState<boolean>(false);

    const handleExpand = () => {
        setExpand((prev) => !prev);

    };

    // const className = !isExpanding ? "expanding-image-container" : "expanded-image-translated";
    return (
        <>
            <div className={"expanding-image-container"}
                onMouseEnter={(event) => setHover(prev => !prev)}
                onMouseLeave={(event) => setHover(prev => !prev)}

            >
                {isHovering && <div className='arrow-up' onClick={() => handleExpand()}></div>}
                {!isExpanding ? <img src={src} className="expanding-image" /> : <img src={src} className="expanded-image" />}
            </div>
        </>

    );
};