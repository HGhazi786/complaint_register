import { db,complaintTable,clientTable } from "@/lib/drizzle";
import { eq,sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getUser() {
  try {
    const res = await db.select().from(clientTable);
    const Items = res.map((item) => ({
      user_id: item.user_id,
      username: item.username,
      email: item.email,
      contactdetails: item.contact_details,
      system_size: item.system_size,
      date_of_installation: item.date_of_installation,
    }));
    return Items;
  } catch (error) {
    console.log(error);
  }
}

export async function getComplaints() {
  try {
    const res = await db.select().from(complaintTable);
    const Items = res.map((item) => ({
      user_id: item.user_id,
      complaint_id:item.complaint_id,
      title: item.title,
      description: item.description,
      action: item.action,
      status: item.status,
    }));
    return Items;
  } catch (error) {
    console.log(error);
  }
};

export async function getSpecificComplaint(mid:number) {
    const res = await db
      .select()
      .from(complaintTable)
      .where(eq(complaintTable.user_id, mid));
    const Items = res.map((item: any) => ({
      complaint_id: item.complaint_id,
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
    return Items;
};

export async function getSpecificUser(mid:number) {
    const res = await db
      .select()
      .from(clientTable)
      .where(eq(clientTable.user_id, mid));
    const Items = res.map((item) => ({
      user_id: item.user_id,
      username: item.username,
      email: item.email,
      contactdetails: item.contact_details,
      system_size: item.system_size,
      date_of_installation: item.date_of_installation,
    }));
    return Items
};
