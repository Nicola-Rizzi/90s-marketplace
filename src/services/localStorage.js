
const localStorageKey = "90s-marketplace-storage";

export const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  } catch (e) {}
};

export const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem(localStorageKey);
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    return undefined;
  }
};