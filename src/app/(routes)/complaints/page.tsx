import ComplientTable from '@/components/tables/complaintsTable'
import React from 'react'

export default function page() {
  return (
    <div className="xl:py-20 lg:py-20 xl:w-[1000px] xl:mx-10 lg:mx-10 m-5">
      <h2 className="text-7xl font-extrabold">Complaints</h2>
      <ComplientTable />
    </div>
  );
}
