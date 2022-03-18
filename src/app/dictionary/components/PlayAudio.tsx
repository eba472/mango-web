
import React from 'react'
import { Howl } from "howler"
import { Button } from 'antd'
import { SoundOutlined } from '@ant-design/icons'

function PlayAudio ({ url }: { url: string }) {
    console.log('url', url)

    const sound = new Howl({
        src: [url],
        html5: true,
        preload: true,
    })
    console.log('sound', sound)

    return (
        <>
            <Button onClick={() => sound.play()}><SoundOutlined /></Button>
        </>
    )
}

export default PlayAudio