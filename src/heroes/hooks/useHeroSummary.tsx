import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions/get-summary.action";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummaryAction,
    // 5 minutos de espera para poder volver a enviar una petición
    staleTime: 1000 * 60 * 5,
  });
};
