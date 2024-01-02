import Link from 'next/link'
import React from 'react'

interface user {
    id:number
    name:string
    email:string
    contact_details:string
    systemSize:string
    date_of_installation:Date
}

export default function UserCard(props:user) {
  return (
    <div className='flex flex-col space-y-5 m-auto'>
      <h2 className='text-heading1-bold'>{props.name}</h2>
      <h3>{props.email}</h3>
    <p>{props.systemSize}</p>
    <p>{String(props.date_of_installation)}</p>
    </div>
  )
}
