import { starShareApi } from "src/boot/axios";

export function getUserEquipement(id) {
  return starShareApi.get(`/equipments/user/${id}`);
}

export function createEquipement(nm, aper, foc, lens, phot, own) {
  return starShareApi.post(`/equipments`, {
    name: nm,
    aperture: aper,
    focal: foc,
    lens: lens,
    photography: phot,
    owner: own,
  });
}

export function getAllEquipment() {
  return starShareApi.get(`/equipments`);
}
