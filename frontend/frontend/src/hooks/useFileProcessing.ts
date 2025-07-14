import { useState } from "react";
import { axiosInstance } from "../services/axios";

export const useFileProcessing = () => {
  const [file, setFile] = useState<File | null>(null);

  const processFile = async (file: File) => {
    setFile(file);
    console.log("Processing file:", file.name);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axiosInstance.post("/process", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error processing file:", error);
      throw error;
    }
  };

  return { processFile, file, setFile };
};
