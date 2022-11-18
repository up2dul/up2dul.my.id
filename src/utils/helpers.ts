function padTo2Digits(num: number) {
  return String(num).padStart(2, '0');
}

const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

function getTime() {
  const day: string = days[d.getDay()];
  const hoursMinutes: string = padTo2Digits(d.getHours()) + ':' + padTo2Digits(d.getMinutes());

  return `${day}, ${hoursMinutes}`;
}

export { getTime };
