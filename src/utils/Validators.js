// Common SQL injection patterns (basic front-end guard)
const SQL_INJECTION_REGEX =
  /(\b(SELECT|INSERT|DELETE|UPDATE|DROP|UNION|ALTER|TRUNCATE)\b)|(--|;|'|"|\/\*|\*\/)/i;

export const isSafeText = (value) => {
  return !SQL_INJECTION_REGEX.test(value);
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};
