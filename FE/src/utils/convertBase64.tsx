export interface FileRequestData {
  imageName: string;
  imageType: string;
  imageClassId?: number;
  content: string;
}

export const fileToFileRequestData = (file: File): Promise<FileRequestData> => {
  return new Promise((resolve, reject) => {
    console.log(file);
    //convert file data to base64
    const fileData: FileRequestData = {
      imageName: file.name,
      imageType: file.name.split(".").pop() || "",
      imageClassId: 2,
      content: "",
    };
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //remove data url
      const content = String(reader.result).split(",").pop();
      if (!content) reject(new Error("Can't get File Content"));
      fileData.content = content as any;
      resolve(fileData);
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
