import Insights from '@/components/shared/insights';
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" xl:w-[1000px] lg:[800px] flex flex-col justify-center p-auto m-auto">
      <div className="grid grid-cols-2 gap-10">
        <div className={`rounded-3xl`}>
          <div className="bg-white bg-opacity-70 p-5 rounded-3xl">
            <h1 className="text-heading1-bold">Complaint Register</h1>
            <h2 className="text-heading3-bold">Welcome Back Administrator</h2>
            <p className="text-body-normal">
              1. To add customer click on add customer
            </p>
            <p className="text-body-normal">
              2. Fill the form on that page and click on submit
            </p>
            <p className="text-body-normal">
              3. To add a new complaint secrch for the customer via customer
              name
            </p>
            <p className="text-body-normal">
              4. If the customer appear then click on add new complaint
            </p>
            <p className="text-body-normal">
              5. Fill the form and submit
            </p>
          </div>
        </div>
        <div className={`bg-[url('/assets/dash.svg')]`}>
        </div>
      </div>
    </div>
  );
}
