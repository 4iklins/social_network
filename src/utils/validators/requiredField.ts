export const requiredField = (value: string) => {
  return value ? undefined : 'Field is required';
};
