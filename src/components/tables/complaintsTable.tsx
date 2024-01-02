import { getComplaints} from '@/lib/actions';
import Link from 'next/link';
import React from 'react'
import { DeleteComplaint } from '../shared/deleteEntry';

export default async function ComplientTable() {
  const res = await getComplaints()
  
  const data = res
  return (
    <table className="text-sm text-left rtl:text-right text-gray-400 rounded-3xl w-[900px]">
        <thead className="text-xs uppercase bg-gray-800 text-gray-100 rounded-3xl overflow-x-scroll">
          <tr>
            <th scope="col" className="px-6 py-3">
              user Id
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Details
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {
            // @ts-ignore
            data?.map((item: complaaint) => (
              <tr
                className=" border-b bg-glassmorphism border-gray-700 hover:bg-gray-200"
                key={item.complaint_id}
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 whitespace-nowrap text-black"
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
                  <Link
                    href={`/customer/${item.user_id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <DeleteComplaint _id={item.user_id}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
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