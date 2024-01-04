import CustomerTable from '@/components/tables/customerTable'
import Link from 'next/link';
import React from 'react'

export default function page() {
  return (
    <div className="">
      <h2 className="mt-28 text-heading1-bold font-extrabold mb-5 text-center">
        Customers
      </h2>
      <div className="flex grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 mb-5 space-x-10">
        <Link
          href={"/customers/oldest"}
          className="px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg"
        >
          By Date Oldest
        </Link>
        <Link
          className="px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg"
          href={"/customers/newest"}
        >
          By Date Latest
        </Link>
      </div>
      <div className="shadow-2xl rounded-3xl overflow-x-auto overflow-y-auto h-[60vh] w-[1000px] mb-2">
        <CustomerTable fltr=''/>
      </div>
    </div>
  );
}
