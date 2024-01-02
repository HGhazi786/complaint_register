import Filters from '@/components/shared/filters';
import ComplientTable from '@/components/tables/complaintsTable'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col justify-between relative my-28 mx-5">
      <h2 className="text-heading1-bold">Complaints</h2>
      <Filters />
      <div className='shadow-lg rounded-3xl overflow-x-auto'>
        <ComplientTable />
      </div>
    </div>
  );
}
