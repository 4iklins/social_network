const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const email = (value: string) => {
  if (!EMAIL_REGEXP.test(value)) {
    return 'Invalid email address';
  } else {
    return undefined;
  }
};
