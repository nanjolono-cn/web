import React, { useContext } from 'react'
import { ColorContext } from '@/pages/ChangeColor/Color'

export default function ShowArea() {
  // @ts-ignore
  const { colorState } = useContext(ColorContext)
  const { color } = colorState
  return <div style={{ color }}>字的颜色变了呀，现在是{color}色</div>
}
