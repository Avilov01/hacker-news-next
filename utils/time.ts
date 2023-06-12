export const getTime = (value?: number | string) => {
  if (!value) {
    return;
  }

  const valueNumber = typeof value === 'string' ? +value : value;

  const diff = new Date().getTime() - valueNumber * 1000;

  if (diff < 1000) {
    return 'right now';
  }

  const sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + ' seconds ago';
  }

  const min = Math.floor(diff / 60000);

  if (min < 60) {
    return min + ' minute ago';
  }

  const hour = Math.floor(diff / 60000 / 60);

  if (hour < 24) {
    return hour + ' hours ago';
  }

  const valueToDateFormat = new Date(valueNumber * 1000);
  const date = valueToDateFormat.toLocaleDateString();
  const time = valueToDateFormat.toLocaleTimeString().slice(0, 5);

  return `${date} ${time}`;
};
