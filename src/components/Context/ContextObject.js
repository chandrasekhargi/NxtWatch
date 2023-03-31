import React from 'react'

const typesOfContent = [
  {
    id: 'home',
    displayText: 'Home',
  },
  {
    id: 'trending',
    displayText: 'Trending',
  },
  {
    id: 'gaming',
    displayText: 'Gaming',
  },
  {
    id: 'saved-videos',
    displayText: 'Saved videos',
  },
]

const ReactObject = React.createContext({
  initialContentType: typesOfContent[0].id,
  onChangeType: () => {},
})

export default ReactObject
