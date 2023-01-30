import React, { useState } from 'react';

type PreviewImageProps = {
    src: string;
};

export const PreviewImage = ({ src }: PreviewImageProps) => {

    const [isExpanding, setExpand] = useState<boolean>(false);

    return (
        <div className="prev-image-container">
            <button className="prev-image-button" onClick={() => setExpand((prev) => !prev)}>
                {isExpanding
                    && <img src={src} className="expanded-image absolute-position-right" />
                }
            </button>
        </div>
    );
};