import { start, get } from 'prompt';
import logError from './log-error';

export default (sucessCallback) => {
  start();

  const options = {
    properties: {
      confirm: {
        pattern: /^(yes|no|y|n)$/i,
        description: 'Do you really want to write in all these files ? (Type yes/No)',
        default: 'No',
      },
    },
  };

  const promptCallback = (_, result) => {
    const confirmPattern = /^(?:y|yes)$/i;
    const isConfirmed = confirmPattern.test(result.confirm);

    if (!isConfirmed) {
      logError('ABORT');
    }

    sucessCallback();
  };

  // wait for user confirmation
  get(options, promptCallback);
};
