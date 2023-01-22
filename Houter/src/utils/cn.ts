type CN = (...a: Array<undefined | null | string | boolean>) => string;

const cn: CN = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ');

export default cn;
