export default (message) => {
  console.error('\x1b[31m', message);
  process.exit(0);
};
