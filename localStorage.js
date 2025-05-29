export const saveToLocal = (key, data) => {
  try {
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    existing.push({...data, timestamp: new Date().toISOString()});
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
};

export const loadFromLocal = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error('Error loading from localStorage', error);
    return [];
  }
};