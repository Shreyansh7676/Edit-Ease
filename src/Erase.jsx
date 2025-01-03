import React from 'react'
import Navbar from './Navbar'

function Erase() {
    return (
        <>

            <div className="bg-orange-200 min-h-screen">
                <Navbar />
                <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                    <div className="bg-orange-300 flex flex-col sm:flex-col lg:flex-row items-center justify-center  px-4 sm:px-0 gap-16 border-8 border-neutral-700 shadow-2xl">

                        <div className='flex flex-col lg:flex-col'>

                            <div className="sm:flex-row py-7 sm:justify-center max-w-4xl">
                                <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 justify-items-start">Select & Upload your Picture Here</label>

                                <input accept="image/jpg, image/jpeg, image/png"
                                    type="file"
                                    className="flex h-10 mt-3 w-full  border border-input border-neutral-700 bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                />
                            </div>


                           
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Erase
