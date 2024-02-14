export function createAddress(
  street: string,
  number: string,
  district: string
) {
  return `${street}, ${number} - ${district}`;
}
