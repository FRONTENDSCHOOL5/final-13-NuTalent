export const loginStateEffect = key => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
        isReset ? localStorage.removedItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
}