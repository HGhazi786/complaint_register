import CustomerTable from '@/components/tables/customerTable'
import React from 'react'

export default function page() {
  return (
    <div className="xl:py-20 lg:py-20 xl:w-[1050px] xl:mx-10 lg:mx-10 m-5">
      <h2 className='text-heading1-bold font-extrabold mb-5 text-center'>Customers</h2>
      <CustomerTable/>
    </div>
  );
}
