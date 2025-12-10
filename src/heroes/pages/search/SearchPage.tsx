import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 min
  });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de SuperHéroes"
        descripcion="Descubre, Explora y administra super héroes y villanos"
      />

      <CustomBreadcrumb
        currenPage="Buscador de superHéroes"
        /*  breadcrumd={[
          { label: "Home", to: "/" },
          { label: "Home2", to: "/" },
          { label: "Home3", to: "/" },
        ]} */
      />

      <HeroStats />

      <SearchControls />

      <HeroGrid heroes={heroes} />
    </>
  );
};
export default SearchPage;
