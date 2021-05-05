import Hero from './components/Hero/Hero';
import featuredImage from './assets/20201219_DevHynes_00136.jpeg';
import featuredImageBlur from './assets/20201219_DevHynes_00136_blur.jpg';

import './App.css';

function App() {
  return (
    <>
      <Hero src={featuredImage} placeholder={featuredImageBlur} />
    </>
  );
}

export default App;
