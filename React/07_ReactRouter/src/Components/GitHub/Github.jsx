import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {

  const data = useLoaderData();

    // not Much Optimized way to fetch data from API

//   const [data, setData] = React.useState(0);
//   useEffect(() => {
//     fetch('https://api.github.com/users/AkshitAman')
//     .then((response)=>response.json())
//     .then((data)=>{
//       console.log(data)
//       setData(data)
//     })
//   }, [])

  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github


export const GitHubInfo = async () => {
  const response = await fetch('https://api.github.com/users/AkshitAman')
  return response.json()
}