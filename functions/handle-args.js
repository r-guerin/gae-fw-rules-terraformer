import { argv } from 'yargs';
import logError from './log-error';

export default () => {
  const { dep, prio, source, target } = argv;

  if (!dep || !parseInt(prio) || !source || !target) {
    logError(
      `
      Invalid parameter - Usage: 
      gae-fw-rules-terraformer --dep=<firstDependency> --prio=<startingPriority> --source=<sourcePath> --target=<targetPath>

      Example: 
      gae-fw-rules-terraformer --dep=allow-rule-russia --prio=8000 --source=/Users/developer/dev/files/uptime-source-ips.txt --target=./environments/**/main.tf
      `,
    );
  }

  return { firstDependency: dep, startingPriority: prio, sourcePath: source, targetFilesPath: target };
};
