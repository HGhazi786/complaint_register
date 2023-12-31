import ComplaintCard from '@/components/shared/complaintCard'
import UserCard from '@/components/shared/userCard';
import React from 'react'

export default async function Page({params}:{params:{slug:string}}) {
  const res = await fetch(`http://localhost:3000/api/user/${params.slug}`, {
    method: "GET",
    cache: "no-cache",
  });
  const userdata = await res.json();
  const resp = await fetch(`http://localhost:3000/api/complaints//${params.slug}`,{
      method: "GET",
      cache: "no-cache",
    }
  );
  const complaintData = await resp.json();
  return (
    <div className="grid grid-cols-3 m-auto gap-10">
      <h2 className="text-7xl font-extrabold">User Information</h2>
      {userdata.map((item: clieent) => (
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
      <h2 className="text-7xl font-extrabold">Complaints</h2>
      <div className="grid grid-cols-3 m-auto gap-10">
        {complaintData.map((item: complaaint) => (
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
