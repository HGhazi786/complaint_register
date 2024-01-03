import { NextRequest,NextResponse } from "next/server"
import { db,complaintTable } from "@/lib/drizzle";
import {eq, and} from "drizzle-orm"

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
        invoice_required:req.invoice_required,
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
  console.log(req)

  try {
    const res = await db.update(complaintTable).set({action:req.action, status:req.status, payment_status:req.payment_status}).where(eq(
        complaintTable.complaint_id, req.complaint_id
      )).returning();

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};