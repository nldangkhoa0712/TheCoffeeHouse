export interface FileRequestData {
  fileName: string;
  fileType: string;
  efileClassCode?: string;
  content: string;
}

export const fileToFileRequestData = (file: File): Promise<FileRequestData> => {
  //   console.log(typeof file);
  //   console.log(file instanceof );
  return new Promise((resolve, reject) => {
    console.log(file.name);
    //convert file data to base64
    const fileData: FileRequestData = {
      fileName: file.name,
      fileType: file.name.split(".").pop() || "",
      content: "",
    };
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //   console.log("first");
      //   console.log(reader.result);
      //remove data url
      const content = String(reader.result).split(",").pop();
      if (!content) reject(new Error("Can't get File Content"));
      fileData.content = content as any;
      resolve(fileData);
      console.log(fileData);
    };

    reader.onerror = function (error) {
      reject(error);
    };
  });
};

export const prepareImgsFn = async (files: File[]) => {
  try {
    const fileReqData = await Promise.all(
      files.map((file) => fileToFileRequestData(file))
    );
    return fileReqData;
  } catch (error) {
    //   showErrorMessage(error)
  }
  return [];
};
