import Filters from '@/components/shared/filters';
import ComplientTable from '@/components/tables/complaintsTable'
import React from 'react'

export default function page() {
  return (
    <div className="xl:py-20 lg:py-20 flex flex-col space-y-10 xl:mx-10 lg:mx-10 items-center">
      <Filters />
      <h2 className="text-heading1-bold">Complaints</h2>
      <div className="overflow-x-scroll">
        <ComplientTable />
      </div>
    </div>
  );
}
