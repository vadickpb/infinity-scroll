import Header from './components/Header';


import './App.css';
import { useEffect, useState } from 'react';
import Images from './components/Images';


function App() {
  const apiKey = 'VnXrGiBX74hlQX19xUmi6T3XZuLlnpulBxWuIxWkRbE'
  const url = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=10`;

  const [images, setImages] = useState([])

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(data => setImages(data))
    }, [])
    

  return (
    <>
      <Header/>
      <Images images={images}/>
    </>
   
  )
}

export default App;
