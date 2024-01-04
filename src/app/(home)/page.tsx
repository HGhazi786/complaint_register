import { DeleteComplaint } from '@/components/shared/deleteEntry';
import Insights from '@/components/shared/insights';
import { getInsights, getPending } from '@/lib/actions';
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  const table = await getPending()
  return (
    <div className=" xl:w-[1000px] lg:[800px] flex flex-col justify-center p-auto m-auto">
      <div className="grid mt-5 grid-cols-1 xl:grid-cols-[40rem,1fr] lg:grid-cols-2 gap-10">
        <div>
          <div className="p-5 rounded-3xl">
            <h1 className="text-heading1-bold">Complaint Register</h1>
            <h2 className="text-heading3-bold">Welcome Back Administrator</h2>
            <p className="text-body-normal">
              1. To add customer click on add customer
            </p>
            <p className="text-body-normal">
              2. Fill the form on that page and click on submit
            </p>
            <p className="text-body-normal">
              3. To add a new complaint secrch for the customer via customer
              name
            </p>
            <p className="text-body-normal">
              4. If the customer appear then click on add new complaint
            </p>
            <p className="text-body-normal">5. Fill the form and submit</p>
          </div>
        </div>
        <div className={""}>
          <Insights />
        </div>
      </div>
      <div className="w-full h-[44vh] scroll-smooth overflow-y-auto mx-2 mt-5 rounded-3xl shadow-xl">
        <table className="text-sm text-left rtl:text-right text-gray-400 rounded-3xl w-full">
          <thead className="text-xs uppercase bg-gray-800 text-gray-100 rounded-3xl overflow-x-scroll">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
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
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
              // @ts-ignore
              table?.map((item: complaaint) => (
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
                      href={`/customer/${item.usrname}`}
                      className="font-medium hover:underline px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-full text-small-regular"
                    >
                      Details
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
                  <td className="px-6 py-4">
                    <DeleteComplaint _id={item.complaint_id} />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
