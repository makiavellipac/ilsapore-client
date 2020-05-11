import React from 'react';
import Navbar from './component/Navbar'
import Carrousel from './component/Carrusel'

function App()  {
 const images=[
    {
        src:'./images/carrousel-1.jpg',
        title:'"Carrousel-1'
    },
    {
        src:'./images/carrousel-2.jpg',
        title:'"Carrousel-2'
    }
]
  return (
    <div className="App">
      <Navbar/>
      <Carrousel images={images} interval={5000}/>
    </div>
  );
}

export default App;
