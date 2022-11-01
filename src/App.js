import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import data from './travelData'
import travelData from './travelData'

const App = () => {

  const cards = travelData.map((card) => {
    return <Card 
      key={card.id}
      {...card}
    />
  })

  return (
    <div>
        <Navbar />
        {cards}
    </div>
  )
}

export default App