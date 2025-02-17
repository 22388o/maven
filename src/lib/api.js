import cookie from "cookie";
import wretch from "wretch";
import * as middlewares from "wretch-middlewares";
import { token } from "$lib/store";
import { get } from "svelte/store";
import { err } from "$lib/utils";

const { retry } = middlewares.default || middlewares;
wretch().polyfills({ fetch });

export const api = wretch().url("/api");
export const electrs = wretch().url("/api/el");

export const hasura = wretch()
  .middlewares([retry({ maxAttempts: 2 })])
  .url("/api/v1/graphql");

export const pub = (t) => (t ? hasura.auth(`Bearer ${t}`) : hasura);
export const query = async (query, variables) => {
  let { data, errors } = await pub(get(token))
    .post({ query, variables })
    .json();
  if (errors) throw new Error(errors[0].message);
  return data;
};

export const hbp = wretch().url(import.meta.env.VITE_HBP);
export const serverApi = wretch().url(import.meta.env.VITE_APP);
