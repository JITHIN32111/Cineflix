
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { actions, originals ,comedy,horror} from './urls'
import './app.css'
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={actions}title='Action' isSmall/>
      <RowPost url={comedy}title='Horror' isSmall/>
      <RowPost url={horror}title='Comedy' isSmall/>



    </div>
  )
}

export default App

