function padTo2Digits(num: number) {
  return String(num).padStart(2, '0');
}

const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

function getTime() {
  return padTo2Digits(d.getHours()) + ':' + padTo2Digits(d.getMinutes());
}

export { getTime };
