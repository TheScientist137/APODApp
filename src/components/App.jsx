import React, { useEffect, useState } from 'react'
import getApodData from '../util/apod'

function App() {
   const [apodData, setApodData] = useState({})

   useEffect(() => {
      getApodData()
         .then(data => setApodData(data))
         .catch(error => console.log('error to obtain api data', error))
   }, [])

   console.log(apodData)

   return (
      <div className='app'>
         <h1>Astronomy Picture of the Day</h1>
         <h2>{apodData.title}</h2>
         <img src={apodData.url} alt="image" />
         <p>{apodData.date}</p>
         <p>{apodData.explanation}</p>
         <p>{apodData.copyright}</p>
      </div>
   )
}
export default App
