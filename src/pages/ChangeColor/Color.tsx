import React, { createContext, useReducer } from 'react'

interface ColorState {
  color: string
}

interface Action {
  type: string
  [propName: string]: any
}

const state: ColorState = {
  color: 'blue',
}

const reducer = (state: ColorState, action: Action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return { color: action.color }
    default:
      return state
  }
}

export const UPDATE_COLOR = 'UPDATE_COLOR'

export const ColorContext = createContext({})

export const Color = (props: any) => {
  const [colorState, dispatch] = useReducer(reducer, state)

  return (
                                  // {color: 'blue'} => {color: {color: 'blue'}}
    <ColorContext.Provider value={{ colorState, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}
