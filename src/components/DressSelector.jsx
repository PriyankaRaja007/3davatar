import React, { useState } from 'react';
import './DressSelector.css';

export const DressSelector = ({ onDressChange, onGenderChange, onSizeChange, currentGender, currentDress }) => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [height, setHeight] = useState(170); // Default height in cm
  const [weight, setWeight] = useState(70); // Default weight in kg
  
  const colorOptions = [
    { id: 'white', name: 'White', value: '#ffffff' },
    { id: 'black', name: 'Black', value: '#000000' },
    { id: 'red', name: 'Red', value: '#ff0000' },
    { id: 'blue', name: 'Blue', value: '#0000ff' },
    { id: 'green', name: 'Green', value: '#00ff00' },
    { id: 'yellow', name: 'Yellow', value: '#ffff00' },
    { id: 'purple', name: 'Purple', value: '#800080' },
    { id: 'pink', name: 'Pink', value: '#ffc0cb' },
    { id: 'orange', name: 'Orange', value: '#ffa500' },
    { id: 'brown', name: 'Brown', value: '#a52a2a' },
    { id: 'gray', name: 'Gray', value: '#808080' },
    { id: 'teal', name: 'Teal', value: '#008080' },
  ];

  const handleColorClick = (colorValue) => {
    console.log('Color selected:', colorValue);
    setSelectedColor(colorValue);
    onDressChange(colorValue);
  };

  const handleHeightChange = (e) => {
    const newHeight = parseInt(e.target.value) || 170;
    setHeight(newHeight);
    onSizeChange({ height: newHeight, weight });
  };

  const handleWeightChange = (e) => {
    const newWeight = parseInt(e.target.value) || 70;
    setWeight(newWeight);
    onSizeChange({ height, weight: newWeight });
  };

  return (
    <div className="dress-selector">
      <h2>Avatar Customization</h2>
      
      <div className="gender-selector">
        <h3>Select Gender</h3>
        <div className="gender-options">
          <button 
            className={`gender-option ${currentGender === 'male' ? 'active' : ''}`}
            onClick={() => onGenderChange('male')}
          >
            Male
          </button>
          <button 
            className={`gender-option ${currentGender === 'female' ? 'active' : ''}`}
            onClick={() => onGenderChange('female')}
          >
            Female
          </button>
        </div>
      </div>

      <div className="size-controls">
        <h3>Body Measurements</h3>
        <div className="measurement-input">
          <label>
            Height (cm):
            <input
              type="number"
              min="140"
              max="220"
              value={height}
              onChange={handleHeightChange}
            />
          </label>
        </div>
        <div className="measurement-input">
          <label>
            Weight (kg):
            <input
              type="number"
              min="40"
              max="150"
              value={weight}
              onChange={handleWeightChange}
            />
          </label>
        </div>
      </div>
      
      <h3>Select Color</h3>
      <div className="color-options">
        {colorOptions.map((color) => (
          <div
            key={color.id}
            className={`color-option ${selectedColor === color.value ? 'active' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorClick(color.value)}
          >
            <span className="color-name">{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 