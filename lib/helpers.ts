import moment from 'moment';

export const formatDate = (date: string | Date, format: string = 'DD/MM/YYYY'): string => {
  return moment(date).format(format);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const saveToStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key: string): unknown => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const handleApiError = (error: unknown): string => {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return 'Error desconocido.';
};

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
