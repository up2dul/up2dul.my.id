const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

export function getTime() {
  return d.getHours() + ':' + d.getMinutes();
}
