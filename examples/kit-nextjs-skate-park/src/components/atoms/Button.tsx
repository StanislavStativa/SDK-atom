import { createAtom } from '@sitecore-content-sdk/nextjs';

const Button = () => {
  return <div>Button</div>;
};

export default createAtom(Button, {
  name: 'Button',
  description: 'A simple button component',
  props: {
    text: {
      type: 'string',
    },
    onClick: {
      type: 'function',
    },
  },
});
