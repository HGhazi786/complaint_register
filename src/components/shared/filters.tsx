"use client"
import Link from 'next/link'
import React from 'react'
import DropdownMenu from './dropdown';

export default function Filters() {
return (
  <div className="flex grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 mb-5 space-x-10">
    <Link
      href={""}
      className="px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg"
    >
      By Date Oldest
    </Link>
    <Link
      className="px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg"
      href={""}
    >
      By Date Latest
    </Link>
    <Link
      href={""}
      className="px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg"
    >
      Pending
    </Link>
    <Link
      href={""}
      className="px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg"
    >
      Resolved
    </Link>
  </div>
);
}
