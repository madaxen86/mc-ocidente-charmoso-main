import { query } from "@solidjs/router";
import { client } from "~/cms";
import { getAboutUsQuery } from "~/cms/queries/singletons";
import type { AboutUs } from "~/shared/types";

/**
 * Service to retrieve the about us page settings.
 */
const getAboutUs = query<() => Promise<AboutUs | undefined>>(async () => {
  "use server";
  //wait for 2 seconds
  await new Promise((r) => setTimeout(r, 2000));
  return {
    _id: "about-us-page",
    _createdAt: "2023-06-05T16:48:50.001Z",
    _updatedAt: "2023-06-05T16:48:50.001Z",
    _rev: "asda",
    _type: "about-us",
    title: "About us",
    headline: "Some new descirption text",
  };
}, "about-us-page");

export { getAboutUs };
