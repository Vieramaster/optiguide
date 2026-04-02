export const capitalizeFirst = (str: string | undefined) =>
  str ? str[0].toUpperCase() + str.slice(1) : ""