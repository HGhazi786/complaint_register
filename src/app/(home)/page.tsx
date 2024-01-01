import Insights from '@/components/shared/insights';
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" xl:w-[1000px] lg:[800px] flex flex-col justify-center p-auto m-auto">
      <div className="grid grid-cols-2 gap-10">
        <div className={`rounded-3xl bg-[url('/assets/dash.svg')] p-`}>
          <div className='bg-white bg-opacity-70 p-5 rounded-3xl'>
            <h1 className="text-heading1-bold">Complaint Register</h1>
            <h2 className="text-heading3-bold">Welcome Back Administrator</h2>
            <p></p>
          </div>
        </div>
        <div>
          <Insights />
        </div>
      </div>
    </div>
  );
}
