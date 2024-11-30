export function isPresent(value: any): boolean {
  return value !== null && value !== undefined;
}

export function present(value: any): any {
  if (isPresent(value)) return value;
  throw new Error('Value is not present');
}