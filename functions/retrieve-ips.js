import { readFileSync } from 'fs';
import logError from './log-error';

export default (sourcePath) => {
  let rawdata;

  try {
    rawdata = readFileSync(sourcePath);
  } catch (err) {
    logError('Could not read file', { filePath: sourcePath });
  }

  let sourceIps = JSON.parse(rawdata);
  const ips = sourceIps && sourceIps.map(({ ipAddress }) => ipAddress);

  if (!ips || !ips.length) {
    logError('No IP adresses found in source file', {
      sourceFile: sourceIpsFilePath,
    });
  }

  return ips;
};
