import {pgTable,varchar,integer,serial,text,timestamp,date,boolean} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const clientTable = pgTable("client", {
  user_id: serial("user_id").primaryKey(),
  username: varchar("username", { length: 55 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  contact_details: varchar("contact_details", { length: 255 }),
  system_size: integer("system_size_kw"),
  invoice_required: boolean("invoice_required"),
  date_of_installation: date("date_of_installation"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const complaintTable = pgTable("complaints", {
  complaint_id: serial("complaint_id").primaryKey(),
  title: varchar("title", { length: 55 }).notNull(),
  description: text("description"),
  user_id: integer("user_id").references(() => clientTable.user_id),
  action: text("action"),
  payment_status: boolean("payment_status"),
  status: boolean("status"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const db = drizzle(sql);