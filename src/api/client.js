import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://referral-marketing-backend.up.railway.app/api",
});

export default apiClient;