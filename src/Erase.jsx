import React from 'react'
import Navbar from './Navbar'

function Erase() {
    return (
        <>
            <Navbar />
            <div className="bg-orange-200 min-h-screen">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-orange-300 flex flex-col sm:flex-col lg:flex-row items-center justify-center px-4 sm:px-0 gap-16 border-8 border-neutral-700 shadow-2xl">

                        <div className='flex flex-col lg:flex-col gap-12'>
                            <div className='max-w-xl'>
                                <p class="text-black text-3xl font-bold">
                                    Edit All Your Photos with Ease</p>
                                <p className="mx-auto text-left mt-4 text-base leading-relaxed text-neutral-600 w-full">
                                    "Enhance your photos effortlessly with our online editor. Upload, adjust brightness, contrast, and saturation, and download your edited images instantly. Experience professional-grade editing with a user-friendly interface. Try it now and make every picture perfect!"
                                </p>
                            </div>
                            <div className="gap-8 sm:flex-row sm:justify-center max-w-4xl mt-8 mb-10">
                                <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 justify-items-start">Select & Upload your Picture Here</label>

                                <input accept="image/jpg, image/jpeg, image/png"
                                    type="file"
                                    className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"


                                />
                                <div className="flex mt-4 max-w-xl max-h-screen justify-center">
                                    <img className='max-h-60' />
                                </div>
                            </div>



                        </div>
                        <button
                            className="bg-orange-400 text-white font-semibold py-3 px-6 border-neutral-700 border-4 shadow-xl transform hover:scale-105 transition duration-300 ease-in-out mb-auto"

                            type="submit"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Erase
