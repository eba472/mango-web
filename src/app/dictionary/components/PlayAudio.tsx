import React from 'react'
import { Howl } from 'howler'
import { Button } from 'antd'
import { SoundOutlined } from '@ant-design/icons'

function PlayAudio({ url }: { url: string }) {
  const sound = new Howl({
    src: [url],
    html5: true,
    preload: true,
  })
  return (
    <>
      <Button onClick={() => sound.play()}>
        <SoundOutlined />
      </Button>
    </>
  )
}

export default PlayAudio
