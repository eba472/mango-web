import React, { FC } from 'react'
import EachKey from './EachKey'

const KeyRow: FC<{ keyRow: string[] }> = ({ keyRow }) => (
    <div>
      <div>
        {keyRow.map((eachKey, index) => <EachKey eachKey={eachKey} key={`eachKey_${String(index)}`} />)}
      </div>
    </div>
)

export default KeyRow
