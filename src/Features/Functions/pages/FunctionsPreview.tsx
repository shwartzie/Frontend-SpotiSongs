import { ConnectDevicePreview } from '../../ConnectDevice/pages/ConnectDevicePreview'
import { LyricsPreview } from '../../Lyrics/pages/LyricsPreview'
import { QueuePreview } from '../../Queue/pages/QueuePreview'
import { VolumePreview } from '../../Volume/pages/VolumePreview'
import { FullScreenPreview } from '../../FullScreen/pages/FullScreenPreview'

import React from 'react'

export const FunctionsPreview = () => {

    const components: any[] = [
        { cmp: <LyricsPreview />, key: 1 },
        { cmp: <QueuePreview />, key: 2 },
        { cmp: <ConnectDevicePreview />, key: 3 },
        { cmp: <VolumePreview />, key: 4 },
        { cmp: <FullScreenPreview />, key: 5 },
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
