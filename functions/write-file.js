import { appendFile } from 'fs';
import logSuccess from './log-success';
import logError from './log-error';
import buildTemplate from './build-template';

export default (ips, firstDependency, startingPriority) => (filePath) => {
  const content = ips.map(buildTemplate(firstDependency, startingPriority)).join('');

  return new Promise((resolve, reject) => {
    appendFile(filePath, content, (err) => {
      if (err) {
        logError(`Error while trying to write file ${filePath}`);
        reject(err);
      } else {
        logSuccess(`file ${filePath} updated`);
        resolve();
      }
    });
  });
};
