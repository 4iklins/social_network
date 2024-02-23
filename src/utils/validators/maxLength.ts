export const maxLength = (max: number) => (value: string) => {
  if (value.length > max) {
    return `Max length ${max} symbols`;
  } else {
    return undefined;
  }
};
