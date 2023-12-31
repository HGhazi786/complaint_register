import { boolean } from 'drizzle-orm/mysql-core';
import Link from 'next/link';
import React from 'react'

export default async function ComplientTable() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/complaints/`, {
    method: "GET",
  });
  const data = await res.json();
  return (
    <div className="rounded-xl bg-clip-border flex flex-col w-full h-full overflow-x-auto scroll-smooth">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400 rounded-3xl">
        <thead className="text-xs uppercase bg-gray-800 text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              userId
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: complaaint) => (
            <tr
              className=" border-b bg-glassmorphism border-gray-700 hover:bg-gray-200"
              key={item.complaint_id}
            >
              <Link href={`/customer/${item.user_id}`}>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 whitespace-nowrap text-white"
                >
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {item.user_id}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">
                  <Status status={item.status} />
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Status(status:any){
if(status==true)
 {return <div className="flex text-green-300 text-body-bold items-center">Resolved</div>;}
 else
 {
   return (
     <div className="flex text-rose-700 text-body-bold items-center">
       Pending
     </div>
   );
 }
}