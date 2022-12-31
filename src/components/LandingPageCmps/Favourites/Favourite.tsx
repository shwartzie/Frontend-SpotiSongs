import React from 'react';
import albumImage from '../../../assets/images/album.jpg';
export const Favourite = ({ favourite }: any) => {
    return (
        <section className='favourite-display'>
            <div>
                <div className='favourite-image'>
                    <img src={albumImage} alt="" />
                </div>

                <div className='favourite-title-button-container'>
                    <div className='favourite-title'>
                        <p>
                            {favourite.title}
                        </p>
                    </div>
                    <div className='favourite-button'>
                        <button>
                            <span className='favourite-button-first-span'>
                                <span>
                                    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" width="24" height="24">
                                        <path d="M15,22V2h5v20H15z M9,22V2H4v20H9z" />
                                    </svg>
                                    {/* <svg role="img" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" width="24" height="24">
                                        <path d="M19,12L5,22.2V1.8L19,12z" />
                                    </svg> */}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

