import Filters from '@/components/shared/filters';
import CustomerTable from '@/components/tables/customerTable'
import React from 'react'

export default function page() {
  return (
    <div className="my-28 flex flex-col justify-between">
      <h2 className="text-heading1-bold font-extrabold mb-5 text-center">
        Customers
      </h2>
      <div className="overflow-x-scroll shadow-2xl shadow-gray-200 rounded-3xl">
        <CustomerTable />
      </div>
    </div>
  );
}
