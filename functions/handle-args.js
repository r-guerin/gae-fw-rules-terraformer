import { argv } from 'yargs';
import logError from './log-error';

export default () => {
  const { dep, prio, source, target } = argv;

  if (!dep || !parseInt(prio) || !source || !target) {
    logError(
      `
      Invalid parameter - Usage: node yaml-transformer <firstDependencyName> <startingPriority>
      Example: node yaml-transformer.js allow-rule-russia 8000
      `,
    );
  }

  return { firstDependency: dep, startingPriority: prio, sourcePath: source, targetFilesPath: target };
};
