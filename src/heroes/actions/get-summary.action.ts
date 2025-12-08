import { heroApi } from "../api/hero.api";
import type { GetSummary } from "../types/get-summary.response";

export const getSummaryAction = async () => {
  const { data } = await heroApi.get<GetSummary>("/summary");

  return data;
};
