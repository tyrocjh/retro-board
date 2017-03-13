export const getCurrentUrl = () => window.location.href;

// user
export const getUserFromLS = () => localStorage.getItem('username');
export const setUserToLS = user => localStorage.setItem('username', user);
