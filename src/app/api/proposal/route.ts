import fs from "fs/promises";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { NextRequest } from "next/server";

interface req {
  refno: string;
  name: string;
  valid: string;
  date: string;
  address: string;
  city: string;
  phno: string;
  panels: string;
  pnlsize: string;
  sys_size: string;
  inv_size: string;
  pnl_brand: string;
  inv_brand: string;
  aepl_charges: string;
  sub_charges: string;
  discount: string;
  total: string;
  cust_struct: string;
  warranty: string;
  tilt: string;
}

export const POST = async (request: NextRequest) => {
  const req = await request.json();
    try {
    const templatePath = path.join(process.cwd(), "public", "temp.docx");
    const content = await fs.readFile(templatePath);

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    const dta: req = {
      refno: req.refno,
      name: req.name,
      valid: " ",
      date: " ",
      address: req.address,
      city: req.city,
      phno: req.phno,
      panels: req.panels,
      pnlsize: req.pnlsize,
      sys_size: req.sys_size,
      inv_size: req.inv_size,
      pnl_brand: req.pnl_brand,
      inv_brand: req.inv_brand,
      aepl_charges: req.aepl_charges,
      sub_charges: req.sub_charges,
      discount: req.discount,
      cust_struct: req.cust_struct,
      total: " ",
      warranty: req.warranty,
      tilt: req.tilt,
    };
    doc.setData(dta);

    doc.render();

    const buf = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });
    const outputPath = path.join(process.cwd(), "public", "output.docx");
    await fs.writeFile(outputPath, buf);
  } catch (error) {
    console.error("Error generating document:", error);
  }
};
