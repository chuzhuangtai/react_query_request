import { RequestBuilder } from "./config/RequestBuilder";
import { formRequest } from "./config/http";

export const configPromptListGet = new RequestBuilder({
  url: "/config/prompt/list",
});
export const configPromptDetailGet = new RequestBuilder({
  url: "/config/prompt/detail",
});
export const configPromptSavePost = new RequestBuilder({
  url: "/config/prompt/save",
  method: "post",
});
export const configPromptDelete = new RequestBuilder({
  url: "/config/prompt/delete",
  method: "post",
  requestFn: formRequest,
});

// 使用方式
// const {data } = configPromptListGet.useQuery()
