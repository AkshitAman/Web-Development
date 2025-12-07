import React from 'react'

function card({username = " Aman ", usn = "Not provided yet"}) {
  // console.log(props);
  
  return (
    <div>
        <div className="flex flex-col items-center p-7 rounded-2xl">
          <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src="https://imgs.search.brave.com/rvOJzc9yYtrFh245VLUhVk6sLxiyINYqwXxwCgEK9xQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibXdp/bmRpYS5jby5pbi9v/ZmZlcnMvbTQvaW1h/Z2VzL2dhbGxlcnkv/NC53ZWJw" />
          </div>
          <div className="flex items-center md:items-start">
            <span className="text-2xl font-medium items-center">{username}</span>
            <span className="font-medium text-sky-500">{usn}</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
            </span>
          
          </div>
        </div>
    </div>
  )
}

export default card