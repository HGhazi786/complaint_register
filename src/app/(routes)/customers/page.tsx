import Filters from '@/components/shared/filters';
import CustomerTable from '@/components/tables/customerTable'
import React from 'react'

export default function page() {
  return (
    <div className="mt-32">
      <h2 className="text-heading1-bold font-extrabold mb-5 text-center">
        Customers
      </h2>
      <div className="shadow-2xl shadow-gray-200 rounded-3xl overflow-x-auto">
        <CustomerTable />
      </div>
    </div>
  );
}
