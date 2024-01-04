import Filters from "@/components/shared/filters";
import ComplientTable from "@/components/tables/complaintsTable";
import React from "react";

export default function page({params}:{params:{filter:string}}) {
  return (
    <div className="">
      <h2 className="text-heading1-bold text-center mt-32 mb-10">Complaints</h2>
      <Filters />
      <div className="shadow-lg rounded-3xl overflow-x-auto w-[1000px] mb-2 overflow-y-auto h-[60vh]">
        <ComplientTable fltr={params.filter} />
      </div>
    </div>
  );
}
