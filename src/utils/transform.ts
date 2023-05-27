export function sentenceCase(str: string) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}
