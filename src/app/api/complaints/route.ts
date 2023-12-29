import { NextRequest,NextResponse } from "next/server"
import { db,complaintTable } from "@/lib/drizzle";
import {eq, and} from "drizzle-orm"
import { timeStamp } from "console";

export const GET = async () => {
  try {
    const res = await db.select().from(complaintTable);
    const Items = res.map((item) => ({
      _id: item.complaint_id,
      username: item.user_id,
      title: item.title,
      description: item.description,
      action: item.action,
      status: item.status,
      creationdate: `${item.created_at?.getDate()}-${item.created_at?.getMonth()}-${item.created_at?.getFullYear()}`,
      creationtime: `${item.created_at?.getHours()}:${item.created_at?.getMinutes()}:${item.created_at?.getSeconds()}`,
      updationdate: `${item.updated_at?.getDate()}-${item.updated_at?.getMonth()}-${item.updated_at?.getFullYear()}`,
      updationtime: `${item.updated_at?.getHours()}:${item.updated_at?.getMinutes()}:${item.updated_at?.getSeconds()}`,
    }));
    return NextResponse.json(Items);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: (error as { message: string }).message,
    });
  }
};

export const POST = async (request: NextRequest) => {

    const req= await request.json()

    try {
    const res = await db
      .insert(complaintTable)
      .values({
        user_id: req.user_id,
        title: req.title,
        description:req.description,
        status:false,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PUT = async (request: NextRequest) => {
  const req = await request.json();

  try {
    const res = await db.update(complaintTable).set({action:req.action, status:req.status}).where(eq(
        complaintTable.complaint_id, req.complaint_id
      )).returning();

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = await request.json();

  try {
    const res = await db
      .delete(complaintTable)
      .where(eq(complaintTable.complaint_id, req.complaint_id))
      .returning();

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};