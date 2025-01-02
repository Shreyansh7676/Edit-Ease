import React, { useState, useEffect, CSSProperties, useContext } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import App from './App';
import { UserContext } from './contexts/UserContextProvider'
import axios from 'axios';

export default function CtaOne() {
    const navigate = useNavigate();
    
    const { setSelectedImage } = useContext(UserContext)


    
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setImage(URL.createObjectURL(e.target.files[0]));
    // }
    const handleEdit = () => {
        navigate('/edit');
    };

    const handleErase=()=>{
        navigate('/remove-bg')
    }
    return (
        <>
            <section className="bg-orange-200 min-h-screen">
                <Navbar />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center pb-20 justify-center mx-auto w-full text-center md:max-w-6xl px-8">

                        <div className="mt-16 bg-orange-300 h-full p-8 border-8 border-neutral-700 ">
                            <div className='flex flex-col lg:flex-col gap-12'>
                                <div className='max-w-xl'>
                                    <p class="text-black text-3xl font-bold">
                                        Edit All Your Photos with Ease</p>
                                    <p className="mx-auto text-left mt-4 pb-5 text-base leading-relaxed text-neutral-600 w-full">
                                        "Enhance your photos effortlessly with our online editor. Upload, adjust brightness, contrast, and saturation, and download your edited images instantly. Experience professional-grade editing with a user-friendly interface. Try it now and make every picture perfect!"
                                    </p>
                                </div>
                                


                                {/* {previews &&
                                    previews.map((pic) => {
                                        return <img src={pic} width={250} className="flex mt-4 items-center justify-center" />;
                                    })} */}
                                

                            </div>
                            <button
                                    className="bg-orange-400 text-white font-semibold py-3 px-6 border-neutral-700 border-4 shadow-xl transform hover:scale-105 transition duration-300 ease-in-out mb-auto"
                                    onClick={handleEdit}
                                    type="submit"
                                >
                                    Explore
                                </button>
                        </div>
                        <div className="mt-16 bg-orange-300 h-full p-8 border-8 border-neutral-700 ">
                            <div className='flex flex-col lg:flex-col gap-12'>
                                <div className='max-w-xl'>
                                    <p class="text-black text-3xl font-bold">
                                        Remove Background from Images</p>
                                    <p className="mx-auto text-left mt-4 text-base leading-relaxed text-neutral-600 w-full">
                                        "Effortlessly remove backgrounds and make your images shine! Upload, adjust, and download in seconds—perfect for stunning designs and polished visuals."
                                    </p>
                                </div>
                                {/* <div className="gap-8 sm:flex-row sm:justify-center max-w-4xl mt-8 mb-10">
                                    <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 justify-items-start">Select & Upload your Picture Here</label>

                                    <input accept="image/jpg, image/jpeg, image/png"
                                        type="file"
                                        className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                        onChange={handleImageUpload}

                                    />
                                    <div className="flex mt-4 max-w-xl max-h-screen justify-center">
                                        <img src={files}  className='max-h-60'/>
                                    </div>
                                </div> */}


                                {/* {previews &&
                                    previews.map((pic) => {
                                        return <img src={pic} width={250} className="flex mt-4 items-center justify-center" />;
                                    })} */}
                                

                            </div>
                            <button
                                    className="bg-orange-400 text-white font-semibold py-3 px-6 border-neutral-700 border-4 shadow-xl transform hover:scale-105 mt-5 transition duration-300 ease-in-out mb-auto"
                                    onClick={handleErase}
                                    type="submit"
                                >
                                    Explore
                                </button>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
