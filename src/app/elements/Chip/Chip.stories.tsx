import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

type ArgTypes = ComponentProps<typeof Chip>;

export default {
  title: 'elements/Chip',
  component: Chip,
  args: {
    label: 'Lorem Ipsum',
    variant: 'outlined',
  },
} as Meta<ArgTypes>;

const startIcon = (
  <span
    css={{
      width: '20px',
      height: '20px',
      display: 'block',
      borderRadius: '50%',
      backgroundColor: '#000',
    }}
  />
);

const endIcon = (
  <span
    css={{
      width: '16px',
      height: '16px',
      border: 'none',
      borderRadius: '50%',
      backgroundColor: '#015dee',
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 700,
      cursor: 'pointer',
    }}
    onClick={() => console.log('End Icon Clicked!')}
  >
    X
  </span>
);

export const Outlined: StoryObj<ArgTypes> = {
  args: { variant: 'outlined' },
};

export const Filled: StoryObj<ArgTypes> = {
  args: { variant: 'filled' },
};

export const VariableComponents: StoryObj<ArgTypes> = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState(true);
    const handleClick = () => {
      args.onClick();
      setSelected((selected) => !selected);
    };

    return (
      <div css={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Chip label='outlined ' variant='outlined' onClick={args.onClick} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='outlined / start icon' variant='outlined' onClick={args.onClick} startIcon={startIcon} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='outlined / end icon' variant='outlined' onClick={args.onClick} endIcon={endIcon} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='outlined / start icon / end icon'
          variant='outlined'
          onClick={args.onClick}
          startIcon={startIcon}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='outlined / start icon / end icon / selected(controlled)'
          variant='outlined'
          selected={selected}
          onClick={handleClick}
          startIcon={startIcon}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='filled' variant='filled' onClick={args.onClick} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='filled / start icon' variant='filled' onClick={args.onClick} startIcon={startIcon} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='filled / end icon' variant='filled' onClick={args.onClick} endIcon={endIcon} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='filled / start icon / end icon'
          variant='filled'
          onClick={args.onClick}
          startIcon={startIcon}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='filled / start icon / end icon / selected'
          variant='filled'
          selected={selected}
          onClick={handleClick}
          startIcon={startIcon}
          endIcon={endIcon}
        />
      </div>
    );
  },
};
