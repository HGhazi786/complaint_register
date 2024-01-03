import { getComplaints, getSpecificUser} from '@/lib/actions';
import Link from 'next/link';
import React from 'react'
import { DeleteComplaint } from '../shared/deleteEntry';

export default async function ComplientTable() {
  const res = await getComplaints()
  const data = res  

  return (
    <table className="text-sm text-left rtl:text-right text-gray-400 rounded-3xl">
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
            Invoice
          </th>
          <th scope="col" className="px-6 py-3">
            Payment Status
          </th>
          <th scope="col" className="px-6 py-3">
            View Details
          </th>
          <th scope="col" className="px-6 py-3">
            Take Action
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
                  <div className="text-base font-semibold">{item.user_id}</div>
                </div>
              </th>
              <td className="px-6 py-4">{item.title}</td>
              <td className="px-6 py-4">
                {
                  // @ts-ignore
                  item.status === "true" ? (
                    <div className="flex text-green-500 text-body-bold items-center">
                      Resolved
                    </div>
                  ) : (
                    <div className="flex text-rose-700 text-body-bold items-center">
                      Pending
                    </div>
                  )
                }
              </td>
              <td className="px-6 py-4">
                {
                  // @ts-ignore
                  item.invoice_required === true ? (
                    <div className="flex text-green-500 text-body-bold items-center">
                      Required
                    </div>
                  ) : (
                    <div className="flex text-rose-700 text-body-bold items-center">
                      Not Required
                    </div>
                  )
                }
              </td>
              <td className="px-6 py-4">
                {
                  // @ts-ignore
                  item.invoice_required === true ? (
                    item.payment_status === true ? (
                      <div className="flex text-green-500 text-body-bold items-center">
                        Recieved
                      </div>
                    ) : (
                      <div className="flex text-rose-700 text-body-bold items-center">
                        Pending
                      </div>
                    )
                  ) : (
                    <div className="flex text-gray-700 text-body-bold items-center">
                      Not Required
                    </div>
                  )
                }
              </td>
              <td className="px-6 py-4">
                <Link
                  href={`/customer/${item.user_id}`}
                  className="font-medium hover:underline px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-full text-small-regular"
                >
                  View Details
                </Link>
              </td>
              <td className="px-6 py-4">
                <Link
                  href={`/Complaint_Action/${item.complaint_id}`}
                  className="font-medium hover:bg-gray-700 text-white px-4 py-2 bg-gray-900 rounded-full text-small-regular"
                >
                  Action
                </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}