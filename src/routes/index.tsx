import { type RouteDefinition } from "@solidjs/router";
import { getHome } from "~/cms/services/singletons";
import { getSeoSettings } from "~/cms/services/singletons/settings";
import { PageSeo } from "~/components/seo";

export const route: RouteDefinition = {
  preload: () => Promise.all([getSeoSettings(), getHome()]),
};

function HomeRouter() {
  return (
    <>
      <PageSeo />
      <h1>Home</h1>
    </>
  );
}

export default HomeRouter;
