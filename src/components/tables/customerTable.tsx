import { getUser } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { DeleteUser } from "../shared/deleteEntry";


export default async function CustomerTable() {
  const res = await getUser();
  const data = res;
return (
  <table className="text-sm w-full text-left rtl:text-right text-gray-800">
    <thead className="text-xs uppercase bg-gray-800 text-gray-100 rounded-3xl">
      <tr>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          System Size
        </th>
        <th scope="col" className="px-6 py-3">
          Date of Installation
        </th>
        <th scope="col" className="px-6 py-3">
          Detail
        </th>
        <th scope="col" className="px-6 py-3">
          Register Complaint
        </th>
      </tr>
    </thead>
    <tbody className="glassmorphism">
      {
        // @ts-ignore
        data?.map((item: clieent) => (
          <tr
            key={item.user_id}
            className=" border-b border-gray-700 rounded-3xl hover:bg-gray-600"
          >
            <Link href={`/customer/${item.user_id}`}></Link>
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap text-white"
            >
              <div className="ps-3">
                <div className="text-base text-black font-semibold">
                  {item.username}
                </div>
                <div className="font-normal text-gray-500">{item.email}</div>
              </div>
            </th>
            <td className="px-6 py-4">{item.system_size}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                {String(item.date_of_installation)}
              </div>
            </td>
            <td className="px-6 py-4">
              <Link
                href={`/customer/${item.user_id}`}
                className="font-medium flex-nowrap text-white text-small-semibold bg-gray-900 px-4 py-2 hover:bg-gray-700 rounded-full"
              >
                Details
              </Link>
            </td>
            <td className="px-6 py-4">
              <Link
                href={`/createComplaint/${item.user_id}`}
                className="font-medium bg-gray-900 px-4 py-2 text-small-regular text-white rounded-full"
              >
                Add New
              </Link>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);
}
