import { useEffect, useState } from 'react'
import { getApodData } from '../../util/apod'
import { IoIosHeart } from 'react-icons/io';
import { FaLinkedin, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './App.css'

function App() {
   const today = new Date().toISOString().split('T')[0]
   const [apodData, setApodData] = useState({})
   const [date, setNewDate] = useState(today)

   const changeDay = (day) => {
      const currentDate = new Date(date)
      currentDate.setDate(currentDate.getDate() + day)
      const formatDay = currentDate.toISOString().split('T')[0]
      setNewDate(formatDay)
   }

   useEffect(() => {
      getApodData(date)
         .then(data => setApodData(data))
         .catch(error => console.log('error to obtain api data', error))
   }, [date])

   return (
      <main className='app'>
         <h1 className='app-title'>Astronomy Picture of the Day</h1>
         <div className='image-container'>
            <a href={apodData.url} className='image-link'><h2 className='image-title'>{apodData.title}</h2></a>
            <img src={apodData.url} alt={apodData.copyright} className='image' />
         </div>
         <div className='description-container'>
            <p className='explanation'>{apodData.explanation}</p>
            <h3 className='author'>{apodData.copyright}</h3>
            <p className='date'>{apodData.date}</p>
         </div>
         <div className='change-image-container'>
            <button className='change-image' onClick={() => changeDay(-1)}>{<FaArrowLeft />}</button>
            {date === today
            ? <button className='hidden'>{}</button>
            : <button className='change-image' onClick={() => changeDay(1)}>{<FaArrowRight />}</button> }
         </div>
         <footer className='footer'>
            <h5 className='code-author'>Made with  <IoIosHeart className='heart' />  by Guillermo Casado</h5>
            <div className='icon-container'>
               <a href='https://www.linkedin.com/in/guillermo-casado-noya-209b45268/'><FaLinkedin className='icon linkedin' /></a>
               <a href='https://github.com/TheScientist137'><FaGithub className='icon' /></a>
            </div>
         </footer>
      </main>
   )
}
export default App
