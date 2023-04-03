import React from 'react'

const ReactObject = React.createContext({
  savedList: [],
  onSaveVideo: () => {},
  onDeleteVideo: () => {},
})

export default ReactObject
