import { Button } from 'antd'
import PlayAudio from 'app/dictionary/components/PlayAudio'
import React from 'react'

interface Phonetictype {
  text: string
  audio?: string
}

const Phonetics = ({ phonetics }: { phonetics: any }) => {
  return (
    <div>
      {phonetics?.map((phonetic: Phonetictype) => {
        return (
          <>
            <Button>{phonetic?.text}</Button>
            {phonetic?.audio && <PlayAudio url={phonetic.audio} />}
          </>
        )
      })}
    </div>
  )
}

export default Phonetics
