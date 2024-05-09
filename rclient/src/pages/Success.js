/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Success = () => {
  return (
    <>

        <div className="container mx-auto px-2 my-2 w-3/5">
            
            {/* <div className="flex p-4 mb-4 text-sm rounded-lg text-green-800 border border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Your Document is ready:</span>
                    <ul className="mt-1.5 list-disc list-inside">
                        <li>Checking Image</li>
                        <li>Checking Texts</li>
                        <li>Hold up a bit</li>
                    </ul>
                </div>
            </div> */}

            {/* bg-tone...................... */}

            <div className="absolute left-0 top-0 w-screen h-screen bg-gradient-to-tr from-sky-100 to-slate-100 -z-10">
            </div>

            
            <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Success alert!</span> Your Document is Ready.
                </div>
            </div>
            

            {/* progress_bar.............................. */}
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"100%"}}> 100%</div>
            </div>


            

            {/* <h2 className="text-3xl text-center mt-2 font-bold dark:text-white">Quality of the Document</h2> */}
            {/* <div className="max-w-sm mx-auto mt-4 pt-2 bg-white border flex flex-col items-center border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-1/3" src="./assets/images.png" alt="imagelt" />
                <div className="p-5 w-full">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Is the Text readable? : <b>True</b></p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Is the image visible? : <b>True</b></p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fluctuation in Image quality : <b>50.0%</b></p>                  
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sharpness : <b>22063.22935</b></p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Upload another file
                    </a>
                </div>
            </div> */}


            <div className="bg-slate-100 mt-2 shadow-lg rounded-md">
                <div className="p-5 w-full">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Is the Text readable? : <b>True</b></p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Is the image visible? : <b>True</b></p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fluctuation in Image quality : <b>50.0%</b></p>                  
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sharpness : <b>22063.22935</b></p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Upload another file
                    </a>
                </div>
            </div>

        </div>

        

    </>
  )
}

export default Success