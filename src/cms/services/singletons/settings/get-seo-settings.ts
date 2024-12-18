import { query } from "@solidjs/router";
import type { SeoSettings } from "~/shared/types";

/**
 * Service to retrieve settings related with SEO.
 */
const getSeoSettings = query(async (): Promise<SeoSettings> => {
  "use server";
  //wait for 2 seconds
  await new Promise((r) => setTimeout(r, 2000));
  return { title: "MC Ocidente Charmoso", keywords: [""], description: "Some default descpition" };
}, "seo-settings");

export { getSeoSettings };
