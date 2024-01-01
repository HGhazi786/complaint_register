"use client";
import React from "react";
import toast from "react-hot-toast";
import {BsTrash3} from "react-icons/bs"

interface idm{
_id:number
}

export function DeleteComplaint(props:idm) {
const deleteApi=async (id:number)=>{
    try {
      const response = await fetch(`/api/complaints/delete/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  }
  async function handleDelete(id: number) {
    toast.promise(deleteApi(id), {
      loading: "Deleting Product",
      success: "Product Deleted Successfully",
      error: "Failed to Delete",
    });
}  
return <button onClick={()=>handleDelete(props._id)}><BsTrash3 className="text-gray-900 hover:text-gray-700 text-xl" /></button>
}

export function DeleteUser(props: idm) {
  const deleteApi = async (id: number) => {
    try {
      const response = await fetch(`/api/user/delete/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  async function handleDelete(id: number) {
    toast.promise(deleteApi(id), {
      loading: "Deleting Product",
      success: "Product Deleted Successfully",
      error: "Failed to Delete",
    });
  }
  return (
    <button onClick={() => handleDelete(props._id)}>
      <BsTrash3 className="text-gray-900 hover:text-gray-700 text-xl" />
    </button>
  );
}