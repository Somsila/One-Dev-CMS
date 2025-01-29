import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export default defineEventHandler(async (event) => {
  const jsonFilePath = path.join(process.cwd(), "content", "interface.json");
  const uploadDir = path.join(process.cwd(), "public/assets");

  /** 🔹 1. Ensure JSON File Exists */
  if (!fs.existsSync(jsonFilePath)) {
    console.error("JSON file not found:", jsonFilePath);
    return { success: false, message: "File not found" };
  }

  try {
    /** 🔹 2. Read Existing JSON Data */
    const existingData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
    const body = await readBody(event);

    /** 🔹 3. Remove Unwanted Numeric Keys */
    const cleanedBody = Object.fromEntries(
      Object.entries(body).filter(([key]) => isNaN(Number(key)))
    );

    /** 🔹 4. Update & Save JSON */
    const updatedData = { ...existingData, ...cleanedBody };
    fs.writeFileSync(jsonFilePath, JSON.stringify(updatedData, null, 2), "utf-8");

    console.log("JSON updated successfully:", updatedData);
  } catch (error) {
    console.error(" JSON Update Error:", error);
    return new Response("Error updating JSON", { status: 500 });
  }

  try {
    /** 5. Handle File Upload */
    const formData = await readMultipartFormData(event);

    if (formData && formData.length > 0 && formData[0].filename) {
      /**Ensure Upload Directory Exists */
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      /** Generate Unique Filename */
      const uuid = uuidv4();
      const newFileName = `${uuid}_${formData[0].filename}`;
      const fileSavePath = path.join(uploadDir, newFileName);

      /**Save File */
      fs.writeFileSync(fileSavePath, formData[0].data);

      console.log("File uploaded successfully:", newFileName);

      /**Return Correct File Path */
      return { filename: `/assets/${newFileName}` };
    } else {
      console.warn("⚠️ No file found in the request.");
    }
  } catch (error) {
    console.error("File Upload Error:", error);
    return new Response("Error uploading file", { status: 500 });
  }
});
