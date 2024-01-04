import Filters from '@/components/shared/filters';
import ComplientTable from '@/components/tables/complaintsTable'
import React from 'react'

export default function page() {
  return (
    <div className="">
      <h2 className="text-heading1-bold mt-28 mb-6 text-center">Complaints</h2>
      <Filters />
      <div className='shadow-lg rounded-3xl overflow-x-auto overflow-y-auto h-[60vh] w-[1000px]'>
        <ComplientTable fltr=''/>
      </div>
    </div>
  );
}
