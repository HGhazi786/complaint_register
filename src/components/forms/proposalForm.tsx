"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";


export default async function PropsalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data:any) => {
    const currentDate = new Date();
    const d = {
      
    };
    const apiPost = async () => {
      const response = await fetch("/api/proposal/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify({
          refno: data.refno,
          name: data.name,
          valid: " ",
          date: " ",
          address: data.address,
          city: data.city,
          phno: String(data.phno),
          panels: String(data.panels),
          pnlsize: String(data.pnlsize),
          sys_size: String(data.sys_size),
          inv_size: String(data.inv_size),
          pnl_brand: data.pnl_brand,
          inv_brand: data.inv_brand,
          aepl_charges: String(data.aepl_charges),
          sub_charges: String(data.sub_charges),
          discount: String(data.discount),
          cust_struct: data.cust_struct,
          total: " ",
          warranty: String(data.warranty),
          tilt: String(data.tilt),
        }),
      });
    };
    toast.promise(apiPost(), {
      loading: "Registering...",
      success: "User registered successfully",
      error: "Failed to registered User",
    });
  };

  return (
    <form
      className="p-10 rounded-3xl glassmorphism shadow-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:flex md:flex xl:flex lg:flex justify-between space-x-2">
        <div className="block font-medium">
          <label>Refrence Number:</label>
          <input
            type="text"
            id="refno"
            className="mt-1 p-1 font-sans focus:ring-0 focus:outline-none focus:ring-none block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("refno", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Name:</label>
          <input
            type="text"
            id="name"
            className="mt-1 p-1 font-sans focus:ring-0 focus:outline-none focus:ring-none block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("name", { required: true })}
          />
        </div>
      </div>
      <div className="sm:flex md:flex xl:flex lg:flex justify-between space-x-2">
        <div className="block font-medium">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            className="mt-1 p-1 font-sans focus:outline-none focus:ring-none focus:ring-0 block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("address", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            className="mt-1 p-1 font-sans focus:outline-none focus:ring-none focus:ring-0 block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("city")}
          />
        </div>
        <div className="block font-medium">
          <label htmlFor="">Phone Number:</label>
          <input
            type="number"
            id="phno"
            className="mt-1 p-1 font-sans focus:outline-none focus:ring-none focus:ring-0 block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("phno")}
          />
        </div>
      </div>
      <div className="sm:flex md:flex xl:flex lg:flex justify-between space-x-2">
        <div className="block font-medium">
          <label>Panel Brand:</label>
          <input
            type="text"
            id="pnl_brand"
            className="mt-1 p-1 focus:outline-none focus:ring-none font-sans focus:ring-0 block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("contact_details", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Panel Wattage:</label>
          <input
            type="number"
            id="pnlsize"
            className="mt-1 p-1 focus:outline-none focus:ring-none font-sans focus:ring-0 block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("pnlsize", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>No Of Panels:</label>
          <input
            type="number"
            id="panels"
            className="mt-1 p-1 focus:outline-none focus:ring-none font-sans focus:ring-0 block w-full text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("panels", { required: true })}
          />
        </div>
      </div>
      <div className="sm:flex md:flex xl:flex lg:flex justify-between space-x-2">
        <div className="block font-medium">
          <label>System Size:</label>
          <input
            type="number"
            id="system_size"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("system_size", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Inverter Size:</label>
          <input
            type="number"
            id="inv_size"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("inv_size", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Inverter Brand:</label>
          <input
            type="text"
            id="inv_brand"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("inv_brand", { required: true })}
          />
        </div>
      </div>
      <div className="sm:flex md:flex xl:flex lg:flex justify-between space-x-2">
        <div className="block font-medium">
          <label>AEPL Charges:</label>
          <input
            type="number"
            id="aepl_charges"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("system_size", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Contractor Charges:</label>
          <input
            type="number"
            id="sub_charges"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("sub_charges", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Discount:</label>
          <input
            type="number"
            id="discount"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("discount", { required: true })}
          />
        </div>
      </div>
      <div className="sm:flex md:flex xl:flex lg:flex justify-between space-x-2">
        <div className="block font-medium">
          <label>Tilt Angle:</label>
          <input
            type="number"
            id="tilt"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("tilt", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Inverters Warranty:</label>
          <input
            type="number"
            id="warranty"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("warranty", { required: true })}
          />
        </div>
        <div className="block font-medium">
          <label>Customized Structure:</label>
          <input
            type="text"
            id="cust_struct"
            className="mt-1 p-1 font-sans focus:ring-0 block w-full focus:outline-none focus:ring-none text-brown bg-transparent border border-b-2 border-b-emerald-900 border-transparent shadow-sm"
            {...register("cust_struct")}
          />
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-5 bg-black text-white rounded-full"
      >
        Submit
      </button>
      {/* <Link href={'./output.docx'}>
        Download
      </Link> */}
    </form>
  );
}
