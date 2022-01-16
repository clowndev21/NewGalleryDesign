import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.preloder();
  }, [])

  return (
    <>
      <h1>Masonry Gallery</h1>

      <div className="gallery" id="gallery">
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,care" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,studied" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,substance" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,choose" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,past" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,lamp" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,yet" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,eight" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,crew" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,event" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,instrument" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,practical" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,pass" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,bigger" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,number" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,feature" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,line" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,railroad" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,pride" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,too" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,bottle" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,base" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,cell" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,bag" alt=""/></div>
          </div>
          <div className="gallery-item">
              <div className="content"><img src="https://source.unsplash.com/random/?tech,card" alt=""/></div>
          </div>
      </div>
     
    </>
  );
}

export default App;
