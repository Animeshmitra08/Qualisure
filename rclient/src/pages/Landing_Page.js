import React, {useRef, useState} from 'react'
import Navbar from './Navbar'
import { MdCancel } from "react-icons/md";
import { FaCheck } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import axios from "axios";


const Landing = () => {

  const [files, setFiles] = useState(null);

  const inputRef = useRef();

  const navi = useNavigate();

  


  const handleChange = (e) =>{
    setFiles(e.target.files[0])
  }

  const handleDrop = (e) =>{
    e.preventDefault();
    setFiles(e.dataTransfer.files[0]);
    const data = new FormData();
    data.append("files[]", files);

    axios.post('http://127.0.0.1:5000/upload', data)
    .then((response)=>{
      console.log(response);
      alert("successfully added");
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  const handleDragOver =(e)=>{
    e.preventDefault();
  }


  return (
    <>
    <Navbar/>
    <main className="relative mx-auto -mt-[6.50rem] overflow-hidden h-screen pt-[5.75rem]">
        <img alt='landing_bg' src="./assets/62620.jpg" className="absolute h-screen -top-[1rem] -ml-[120rem] max-w-none w-[200rem] -z-10 sm:-ml-[100.5rem] left-1/3"/>
        <section className="relative w-full max-w-container px-4 sm:px-6 lg:px-8 h-[35rem] sm:h-[28em] mt-[10rem] flex flex-col items-center">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Welcome to Qualisure
          </h1>
          <h2 className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            At Qualisure, we understand the importance of flawless documents in making a lasting impression. Whether it's a business proposal, academic paper, or any other document, our Document Quality Check services are designed to elevate your content to the highest standards.
          </h2>
          <br />
          <div className="md:w-1/3 w-1/2">            
            <div class="flex items-center justify-center w-full shadow-xl">
                <label for="dropzone-file" onDrop={handleDrop} onDragOver={handleDragOver} class="flex flex-col items-center justify-center w-full border-2 border-cyan-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">'txt', 'pdf', 'png', 'jpg', 'jpeg',
                          'doc', 'docx'</p>
                    </div>                    
                    <input id="dropzone-file" type="file" ref={inputRef}  hidden onChange={handleChange} />                    
                </label>
            </div> 
          </div>
        </section>

       
        
      </main>
    </>
  )
}

export default Landing