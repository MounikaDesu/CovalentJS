import anysort from 'anysort';

import { parameters as mainParameters } from '../../../.storybook/preview';

import '../theme/theme.scss';
import '../../../.storybook/theme/markdown-elements.scss';

export const parameters = {
  options: {
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous;
      const [nextStory, nextMeta] = next;

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Introduction',
        'Guides/**',
        'Patterns/**',
        'Basics/**',
        'Components/**/Overview',
      ]);
    },
  },
  ...mainParameters,
};
