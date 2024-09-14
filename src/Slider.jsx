import React from 'react'

export default function Slider({ min, max, value, handleChange}) {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider range accent-orange-400"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}