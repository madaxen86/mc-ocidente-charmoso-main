import { query } from "@solidjs/router";
import { client } from "~/cms";
import { getAboutUsQuery } from "~/cms/queries/singletons";
import type { AboutUs } from "~/shared/types";

/**
 * Service to retrieve the about us page settings.
 */
const getAboutUs = query<() => Promise<AboutUs | undefined>>(async () => {
  "use server";

  return {
    aboutUs: {
      title: "About us",
      headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  } as unknown as AboutUs;
}, "about-us-page");

export { getAboutUs };
