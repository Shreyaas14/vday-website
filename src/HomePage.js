import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heartImage from './heart.png';


function HomePage() {
  const [position, setPosition] = useState({ left: 50, top: 50 });
  const navigate = useNavigate();

  useEffect(() => {
    const yesButton = document.getElementById('yesButton');
    if (yesButton) {
      const rect = yesButton.getBoundingClientRect();
      const initialLeft = rect.right + 40;
      const initialTop = rect.top - 20;
      setPosition({ left: initialLeft, top: initialTop });
    }
  }, []);

  const handleMouseMove = (e) => {
    const noButton = document.getElementById('noButton');
    const noButtonRect = noButton.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (mouseX < noButtonRect.right && mouseX > noButtonRect.left && mouseY < noButtonRect.bottom && mouseY > noButtonRect.top) {
      let newX = Math.random() * (window.innerWidth - noButtonRect.width);
      let newY = Math.random() * (window.innerHeight - noButtonRect.height);

      newX = Math.max(0, Math.min(newX, window.innerWidth - noButtonRect.width));
      newY = Math.max(0, Math.min(newY, window.innerHeight - noButtonRect.height));

      setPosition({ left: newX, top: newY });
    }
  };

  const goToValentinePage = () => {
    navigate('/valentine')
  }
  return (
    <div className="homePage">
      <header className="homePage-header">
        <h1>Will you be my Valentine?</h1>
        <img src={heartImage} alt="Heart" style={{ maxWidth: '100px', margin: '20px auto' }} />
        <button id="yesButton" onClick={goToValentinePage} style={{ marginLeft: '-100px'}}>Yes</button>
        <button
          id="noButton"
          style={{ position: 'absolute', left: `${position.left}px`, top: `${position.top}px`}}
          onMouseMove={handleMouseMove}
        >
          No
        </button>
      </header>
    </div>
  );
}

export default HomePage;
