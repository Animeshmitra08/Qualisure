import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { useUserAuth } from '../Context/authContext/AuthContextProvider';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {useNavigate } from "react-router-dom"

const Profile = () => {
  // const [displayName, setDisplayName] = useState("");
  const [editable, setEditable] = useState(false);
  const { user } = useUserAuth();
  const [profileData, setProfileData] = useState({
    // firstName : "",
    // lastName:"",
    fullName : "",
    phnNumber : "",
    email:""
  })

  const navigate = useNavigate();

  let name, value;
  const handleChange = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setProfileData({...profileData, [name]:value})
  }

  useEffect(() => {
    if (!user) {
      console.error("no user")
    }else{
      // setDisplayName(user.displayName);
      // const [firstName, lastName] = displayName ? displayName.split(' ') :['FirstName, as displayName might be missing', 'lastname'];
      setProfileData({
        // firstName : `${firstName}`,
        // lastName:`${lastName}`,
        fullName : `${user.displayName}`,
        email:`${user.email}`, 
      })
    }
    
  }, [user]);   
  
  
  



  
  
  return (
    <>
      <section className='bg-slate-100 p-3 rounded-md shadow-lg'>  
        <div className='flex justify-between'>
          <h1 className='text-xl font-bold p-2'>User Details</h1>      
          <button className='text-lg' onClick={()=>setEditable((prev)=>!prev)}><FaEdit/></button>
          {console.log(editable)}
        </div>
        <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="First Name" 
                    value={profileData.firstName}
                    name="firstName"
                    onChange={handleChange}
                    required />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input 
                    type="text" 
                    id="last_name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Last Name" 
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    required />
                </div>  */}
                <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                    <input 
                    type="text" 
                    id="fullName" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-slate-300" 
                    placeholder="Full Name" 
                    name="fullName"
                    disabled={editable? false : true}
                    value={profileData.fullName}
                    onChange={handleChange}
                    required />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <PhoneInput 
                    type="tel" 
                    id="phone"                     
                    defaultCountry='IN' 
                    international 
                    value={profileData.phnNumber} 
                    onChange={handleChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input 
                type="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-slate-300" 
                placeholder="Email"
                name="email"
                disabled={editable? false : true}
                value={profileData.email}
                onChange={handleChange}
                required />
            </div> 
            <div>
              <button class="bg-transparent text-xs hover:bg-[#caf0f8] text-[#03045e] py-2 px-4 border border-[#0077b6] hover:border-transparent rounded mb-3" onClick={()=>{navigate("/reset")}}>Change Password</button>
            </div>
            <button type="submit" 
            className="text-white right-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed"
            disabled={editable? false : true}
            >Save</button>
        </form>
      </section>
    </>
  )
}

export default Profile