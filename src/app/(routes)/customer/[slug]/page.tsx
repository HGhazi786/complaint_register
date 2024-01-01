import ComplaintCard from '@/components/shared/complaintCard'
import UserCard from '@/components/shared/userCard';
import { getSpecificComplaint, getSpecificUser } from '@/lib/actions';
import React from 'react'

export default async function Page({params}:{params:{slug:string}}) {
  const res = await getSpecificComplaint(Number(params.slug))
  const complaintData = res
 const resp = await getSpecificUser(Number(params.slug))
  const userData = resp;
  return (
    <div className="flex justify-between flex-col">
      <h2 className="text-heading2-bold">User Information</h2>
      {
      // @ts-ignore
      userData?.map((item: clieent) => (
        <UserCard
          key={item.user_id}
          id={item.user_id}
          contact_details={item.contactdetails}
          name={item.username}
          email={item.email}
          systemSize={item.system_size}
          date_of_installation={item.date_of_installation}
        />
      ))}
      <h2 className="text-heading2-bold">Complaints</h2>
      <div className="grid grid-cols-3 m-auto gap-10">
        {
        // @ts-ignore
        complaintData?.map((item: complaaint) => (
          <ComplaintCard
            key={item.complaint_id}
            title={item.title}
            complaintId={item.complaint_id}
            status={item.status}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
}
