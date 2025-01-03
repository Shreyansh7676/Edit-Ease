import React, { useState, useContext, useRef } from 'react'
import { UserContext } from './contexts/UserContextProvider'
import * as htmlToImage from 'html-to-image';

import Modes from './Modes'
import './App.css'
import Slider from './Slider'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import './button.css'

const Default_option = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 300
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 16
    },
    unit: 'px'
  }
]

function App(props) {


  // const { selectedImage } = useContext(UserContext)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [files, setFiles] = useState();
  const [picture, setPicture] = useState();
  const [previews, setPreviews] = useState();
  const [options, setOptions] = useState(Default_option)
  const selectedOption = options[selectedOptionIndex]
  const [selectedImage, setSelectedImage] = useState();
  const domEl = useRef(null);

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex)
          return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ') }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files);
    setFiles(URL.createObjectURL(e.target.files[0]));
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    // download image
    const link = document.createElement('a');
    link.download = 'html-to-img.png';
    link.href = dataUrl;
    link.click();
  };
  return (
    <>

      <div className="bg-orange-200 min-h-screen">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">

          <div className="bg-orange-300 flex flex-col sm:flex-col lg:flex-col items-center justify-center px-4 mt-4 sm:px-0 border-8 border-neutral-700 py-8 shadow-2xl">
            <div className="gap-8 sm:flex-row sm:justify-center max-w-4xl mb-6">
              <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 justify-items-start">Select & Upload your Picture Here</label>

              <input accept="image/jpg, image/jpeg, image/png"
                type="file"
                className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                onChange={handleImageUpload}

              />
            </div>
            {selectedImage ? <div className='flex gap-16 lg:flex-row flex-col'>
              <img src={selectedImage} ref={domEl} style={getImageStyle()} alt="To be edited" className='bg-contain w-auto h-96' />
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center">
                  <Slider
                    min={selectedOption.range.min}
                    max={selectedOption.range.max}
                    value={selectedOption.value}
                    handleChange={handleSliderChange}
                  />
                </div>
                <div className="flex flex-col border-4 items-center justify-stretch border-neutral-700 bg-orange-400">
                  {options.map((option, index) => {
                    return (
                      <Modes
                        key={index}
                        name={option.name}
                        active={index === selectedOptionIndex}
                        handleClick={() => setSelectedOptionIndex(index)}
                        className="w-full"
                      />)
                  })}
                </div>
              </div>
            </div> :
              <>
                <div className='bg-orange-200 '></div>
              </>}



          </div>
          {selectedImage ? <div className="flex items-center justify-center mt-6 pb-10">
            <button class="button" type="button" onClick={downloadImage}>
              <span class="button__text">Download</span>
              <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
            </button>
          </div> :
            <div></div>}

        </div>
      </div>
    </>
  )
}

export default App
