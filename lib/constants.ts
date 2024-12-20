export const API_BASE_URL = 'https://api.tucuaderno.com';
export const ENVIRONMENT = process.env.NODE_ENV || 'development';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  NOTEBOOK: '/notebook/:id',
  PAGE: '/notebook/:id/page/:pageId',
};

export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
};

export const LIMITS = {
  MAX_FILE_SIZE_MB: 10,
  MAX_NOTE_TITLE_LENGTH: 100,
  MAX_COMMENT_LENGTH: 500,
};

export const COLORS = {
  PRIMARY: '#1a73e8',
  SECONDARY: '#fbbc05',
  BACKGROUND: '#ffffff',
  TEXT: '#333333',
};

export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
};

export const MESSAGES = {
  ERROR: {
    GENERIC: 'Algo salió mal. Por favor, inténtalo nuevamente.',
    NETWORK: 'Error de conexión. Verifica tu red.',
  },
};
