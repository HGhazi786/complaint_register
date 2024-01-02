"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface mid {
  _id: number;
}

function TakeAction(props: mid) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data:any) => {
    console.log(data);
    // Handle form submission here
    const apiPost = async () => {
      const response = await fetch("/api/complaints/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify({
          complaint_id: props._id,
          action: data.action,
          status: data.status,
        }),
      });
    };
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
      <div>
        <label>Status:</label>
        <input
          id="status"
          type="checkbox"
          className="mt-1 p-1 text-gray-400 font-sans focus:ring-0 block w-full text-brown bg-transparent border border-b-2 focus:outline-none focus:ring-none border-b-emerald-900 border-transparent shadow-sm"
          {...register("status", { required: true })}
        />
        <label>Action:</label>
        <textarea
          id="action"
          className="mt-1 p-1 text-gray-400 font-sans focus:ring-0 block w-full text-brown bg-transparent border border-b-2 focus:outline-none focus:ring-none border-b-emerald-900 border-transparent shadow-sm"
          {...register("action", { required: true })}
        />
      </div>
      <button type="submit" className="px-4 py-2 mt-5 bg-black text-white">
        Submit
      </button>
    </form>
  );
}

export default TakeAction;
