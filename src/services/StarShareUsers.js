import { starShareApi } from "src/boot/axios";

export function login(param1, param2) {
  return starShareApi.post("/users/login", {
    email: param1,
    password: param2,
  });
}
