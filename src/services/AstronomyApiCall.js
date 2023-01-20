import { astronomyApi } from "boot/axios";

export function celestialSearch(term) {
  return astronomyApi.get(`/search?term=${term}`, {
    headers: {
      Authorization: `${process.env.ASTRONOMY_AUTH_TYPE} ${process.env.ASTRONOMY_AUTH_KEY}`,
    },
  });
}
