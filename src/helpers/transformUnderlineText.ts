export const transformUnderlineText = (string: string, cb: (string: string) => string) => {
  return string
    .split('_')
    .map((string) => cb(string))
    .join(' ');
};
