import glob from 'glob';

import handleArgs from './handle-args';
import logError from './log-error';
import launchPrompt from './launch-prompt';
import retrieveIps from './retrieve-ips';
import writeFile from './write-file';

const { firstDependency, startingPriority, sourcePath, targetFilesPath } = handleArgs();

glob(targetFilesPath, (err, files) => {
  if (err || !files.length) {
    logError('No files matched regex', { regex: targetFilesPath });
  }

  const ips = retrieveIps(sourcePath);
  console.log(`Will append ${ips.length} firewall rules in the following files`, files);

  launchPrompt(() => {
    files.forEach(writeFile(ips, firstDependency, startingPriority));
  });
});
