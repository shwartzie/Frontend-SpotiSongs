import React from 'react';
import { utilService } from '../../services/util.service.ts';

export const Favourites = () => {

    const title: string = utilService.getCurrentDayStatus();
    return (
        <section className="favourites-container">
            <div className='favourites-title'>
                <div>
                    <h2>
                        {title}
                    </h2>
                </div>
            </div>
        </section>
    );
}

