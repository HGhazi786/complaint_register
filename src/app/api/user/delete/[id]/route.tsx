import { NextResponse } from "next/server";
import { db, clientTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const DELETE = async ({ params }: { params: { id: string } }) => {
  const mid=Number(params.id)
  try {
    const res = await db
      .delete(clientTable)
      .where(eq(clientTable.user_id, mid))
      .returning();

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
