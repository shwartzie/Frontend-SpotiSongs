import React from 'react';

type TitleProps = {
    title: string
    className: string
}

export const Title = ({ title,className }: TitleProps) => {
    return (
        <div className={`general-title ${className}`}>
            <div>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    );
}
