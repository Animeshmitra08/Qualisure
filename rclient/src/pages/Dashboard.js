import React from 'react'
import { useUserAuth } from '../Context/authContext/AuthContextProvider'

const Dashboard = () => {
    const { user } = useUserAuth();
  return (
    <>
        <div>
            Dashboard
        </div>
        <p>{user && user.email}</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quam saepe. Neque perferendis maxime impedit saepe dicta, pariatur, modi voluptas, eaque dolorem laudantium cupiditate? Dolore, tempore? Molestiae accusantium, consectetur similique in excepturi enim, maiores quaerat reprehenderit molestias, quidem nobis aliquid consequatur impedit officia totam sint dolor culpa est. Ullam, odit!
        </p>        
    </>
  )
}

export default Dashboard