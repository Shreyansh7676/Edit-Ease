import React, { useState, useEffect, CSSProperties, useContext } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import App from './App';
import { UserContext } from './contexts/UserContextProvider'

export default function CtaOne() {
    const navigate = useNavigate();
    const [files, setFiles] = useState();
    const [picture, setPicture] = useState();
    const [previews, setPreviews] = useState();
    const { setSelectedImage } = useContext(UserContext)


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files);
        setFiles(URL.createObjectURL(e.target.files[0]));
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setImage(URL.createObjectURL(e.target.files[0]));
    // }
    const handleProceed = () => {
        navigate('/edit');
    };
    return (
        <>

            <section className="bg-orange-200 w-full h-full mb-auto">
                <Navbar />
                <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 mb-auto">
                    <div className="flex items-center justify-center mx-auto w-full text-center md:max-w-4xl px-8 py-10">
                        
                            <div className="mt-16 bg-orange-300 h-full p-8 border-8 border-neutral-700 max-w-5xl">
                                <p class="text-black text-3xl font-bold">
                                    Edit All Your Photos with Ease</p>
                                <p className="mx-auto mt-4 text-base leading-relaxed text-neutral-600 w-full">
                                    "Enhance your photos effortlessly with our online editor. Upload, adjust brightness, contrast, and saturation, and download your edited images instantly. Experience professional-grade editing with a user-friendly interface. Try it now and make every picture perfect!"
                                </p>
                                <div className="gap-8 sm:flex-row sm:justify-center mt-8 mb-10">
                                    <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 justify-items-start">Select & Upload your Picture Here</label>

                                    <input accept="image/jpg, image/jpeg, image/png"
                                        type="file"
                                        className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                        onChange={handleImageUpload}

                                    />

                                </div>
                                <div className="flex justify-center">
                                    <img src={files} width={'50%'} />
                                </div>

                                {/* {previews &&
                                    previews.map((pic) => {
                                        return <img src={pic} width={250} className="flex mt-4 items-center justify-center" />;
                                    })} */}
                                <button
                                    className="bg-orange-400 text-white font-semibold py-3 px-6 border-neutral-700 border-4 shadow-xl transform hover:scale-105 transition duration-300 ease-in-out mt-8 mb-auto"
                                    onClick={handleProceed}
                                    type="submit"
                                >
                                    Submit
                                </button>

                            </div>


                        </div>

                    </div>
                
            </section>
        </>
    )
}
