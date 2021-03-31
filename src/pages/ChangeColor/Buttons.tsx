import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from '@/pages/ChangeColor/Color'

export default function Buttons() {
  // @ts-ignore
  const { dispatch } = useContext(ColorContext)

  return (
    <div>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'red' })}>
        红色
      </button>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'yellow' })}>
        黄色
      </button>
    </div>
  )
}
