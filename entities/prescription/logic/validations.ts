import { DIOPTERS_CONFIG, AXIS_CONFIG, DIAMETER_CONFIG } from "../constants";
import type { PrescriptionObjectValues } from "../types/types";

export const isDiopterValid = (value: number) =>
  Number.isFinite(value) &&
  value >= DIOPTERS_CONFIG.min &&
  value <= DIOPTERS_CONFIG.max;

export const isAxisValid = (value: number) =>
  integerFieldValid(value, AXIS_CONFIG);

export const isDiameterValid = (value: number) =>
  integerFieldValid(value, DIAMETER_CONFIG);

const integerFieldValid = (value: number, object: PrescriptionObjectValues) =>
  Number.isInteger(value) && value >= object.min && value <= object.max;


