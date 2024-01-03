"use client";
import { getSpecificUser } from "@/lib/actions";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface mid{
  _id:number
}

function ComplaintForm(props:mid) {
  async function checkForInvoice(id: number) {
    const ures = await getSpecificUser(id);
    const dateofInstallation = ures[0].date_of_installation;
    const currentDate = new Date();
    // @ts-ignore
    const timediff = currentDate.getTime() - dateofInstallation?.getTime();
    const millisecondsInOneYear = 365 * 24 * 60 * 60 * 1000;
    const isGreaterThan = timediff > millisecondsInOneYear;
    return isGreaterThan;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data:any) => {
    const invoice = await checkForInvoice(props._id); 
    // Handle form submission here
     const apiPost=async ()=>{const response = await fetch("/api/complaints/", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       cache: "no-cache",
       body: JSON.stringify({
         user_id: props._id,
         title: data.title,
         description: data.description,
         invoice_required:invoice
       }),
     });}
     toast.promise(apiPost(), {
       loading: "Registering...",
       success: "Complaint registered successfully",
       error: "Failed to registered Complaint",
     });
  };

  return (
    <form
      className="p-10 rounded-3xl glassmorphism shadow-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
        <div className="block font-medium">
          <label>Title:</label>
          <input
            type="text"
            id="title"
            className="mt-1 p-1 text-gray-400 font-sans focus:ring-0 block w-full text-brown focus:outline-none focus:ring-none bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("title", { required: true })}
          />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          id="description"
          className="mt-1 p-1 text-gray-400 font-sans focus:ring-0 block w-full text-brown bg-transparent border border-b-2 focus:outline-none focus:ring-none border-b-emerald-900 border-transparent shadow-sm"
          {...register("description", { required: true })}
        />
      </div>
      <button type="submit" className="px-4 py-2 mt-5 bg-black text-white">
        Submit
      </button>
    </form>
  );
}

export default ComplaintForm;
