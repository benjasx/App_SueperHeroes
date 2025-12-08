import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

export const SearchPage = () => {
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
    </>
  );
};
export default SearchPage;
