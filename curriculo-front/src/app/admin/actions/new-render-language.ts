import axios from "axios";

export async function newRenderLanguages(status: boolean | undefined) {
  if (status) {
    const response = await axios.get(
      "http://localhost:3000/v1/curriculo/languages"
    );

    return response.data;
  }

  return status;
}

export async function renderFetchLanguage(status: boolean | undefined = true) {
  if (status) {
    const response = await axios.get(
      "http://localhost:3000/v1/curriculo/languages"
    );

    return response.data;
  }

  return status;
}
