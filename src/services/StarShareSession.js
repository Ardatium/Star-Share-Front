import { starShareApi } from "src/boot/axios";

export function getUserSession(id) {
  return starShareApi.get(`/sessions/user/${id}`);
}

export function createSession(org, equ, tar, sdt, dur, lat, long) {
  return starShareApi.post(`/sessions/`, {
    organizer: org,
    equipments: equ,
    targets: tar,
    session_date: sdt,
    duration: dur,
    place: {
      lat: lat,
      long: long,
    },
  });
}

export function getAllSession() {
  return starShareApi.get(`/sessions`);
}
