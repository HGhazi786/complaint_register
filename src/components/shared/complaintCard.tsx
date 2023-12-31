import React from 'react'

interface complaint{
    title:string
    complaintId:number
    status:boolean    
    desc:string
}

export default function ComplaintCard(props:complaint) {
  return (
    <div className="text-black flex flex-col w-[300px] justify-between shadow-2xl p-5 rounded-3xl glassmorphism">
      <div className="flex justify-between">
        <p className="text-heading3-bold">Title</p>
        <p className="text-body-medium">12</p>
      </div>
      <p className="text-gray-600 text-base-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius similique
        numquam dolorum ullam aperiam excepturi commodi obcaecati optio
        praesentium ea fugiat cumque, illo omnis deleniti error libero non,
        eligendi provident!
      </p>
      <div className=" flex justify-between rounded-full">
        {props.status ? (
          <p className="text-white bg-green-400 rounded-full px-2 py-1">
            Resolved
          </p>
        ) : (
          <p className="text-white bg-rose-600 rounded-full px-2 py-1">
            Pending
          </p>
        )}
        <button className="px-2 py-1 rounded-full bg-black text-white">
          Action
        </button>
      </div>
    </div>
  );
}
