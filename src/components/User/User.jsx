import React from 'react'

// for passing parameter in url
import { useParams } from 'react-router-dom'

const User = () => {
    // aanathi aapde je pan value url ma pass kari hase ae store thay jase userid ma 
    const {userid} = useParams();
  return (
    <div className=' text-center bg-gray-600 text-white text-3xl p-4 '>User:{userid}</div>
  )
}

export default User