import React from 'react'

export default async function Page({ params }: { params: { query: string } }) {
  const res = await fetch("http://localhost:3000/api/user/", {
    method: "GET",
    cache: "no-cache",
  });

  function filterByUsername(data:any, username:string) {
    return data.filter((item: any) => item.username.toLowerCase() === username);
}

  const name= params.query
  const raw = await res.json();
  const data = filterByUsername(raw, name.toLowerCase());
  return (
    <div className="relative my-28 rounded-xl bg-clip-border flex flex-col w-full h-full overflow-x-auto scroll-smooth">
      <table className="shadow-2xl shadow-gray-200 z-50 text-sm w-full text-left rtl:text-right text-gray-800 min-w-max">
        <thead className="text-xs uppercase bg-gray-800 text-gray-100 rounded-3xl">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              System Size
            </th>
            <th scope="col" className="px-6 py-3">
              Date of Installation
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="glassmorphism">
          {data.map((item: any) => (
            <tr
              key={item.user_id}
              className=" border-b border-gray-700 rounded-3xl hover:bg-gray-600"
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 whitespace-nowrap text-white"
              >
                <div className="ps-3">
                  <div className="text-base text-black font-semibold">
                    {item.username}
                  </div>
                  <div className="font-normal text-gray-500">{item.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{item.system_size}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {item.date_of_installation}
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
