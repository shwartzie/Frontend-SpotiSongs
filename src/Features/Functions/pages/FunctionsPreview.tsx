import { ConnectDevice } from '../../C../../ConnectDevice/pages/ConnectDevice'
import { Lyrics } from '../../Lyrics/pages/Lyrics'
import { Queue } from '../../Queue/pages/Queue'
import { Volume } from '../../Volume/pages/Volume'
import { FullScreen } from '../../FullScreen/pages/FullScreen'

import React from 'react'

export const FunctionsPreview = () => {

    const components: any[] = [
        { cmp: <Lyrics />, key: 1 },
        { cmp: <Queue />, key: 2 },
        { cmp: <ConnectDevice />, key: 3 },
        { cmp: <Volume />, key: 4 },
        { cmp: <FullScreen />, key: 5 },
    ]

    return (
        <section className='functions-preview-container'>
            <div className='function-preview-layout'>
                {components.map(({ cmp, key }) => (
                    <div key={key}>
                        {cmp}
                    </div>))}
            </div>
        </section>
    )
}
