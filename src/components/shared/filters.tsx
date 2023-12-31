"use client"
import Link from 'next/link'
import React from 'react'
import DropdownMenu from './dropdown';

export default function Filters() {
return (
  <div className="flex space-x-10">
    <DropdownMenu />
    <Link
      href={""}
      className="px-2 py-1 rounded-full bg-gray-900 text-white shadow-lg"
    >
      Pending
    </Link>
    <Link
      href={""}
      className="px-2 py-1 rounded-full bg-gray-900 text-white shadow-lg"
    >
      Resolved
    </Link>
  </div>
);
}
