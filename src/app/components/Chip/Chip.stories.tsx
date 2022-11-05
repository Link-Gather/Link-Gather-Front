import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

type ArgTypes = ComponentProps<typeof Chip>;

export default {
  title: 'components/Chip',
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
    return (
      <div css={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Chip label='outlined / non-clickable / no start icon / no end icon' variant='outlined' />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='outlined / clickable / no start icon / no end icon' variant='outlined' onClick={args.onClick} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='outlined / clickable / start icon / no end icon'
          variant='outlined'
          onClick={args.onClick}
          startIcon={startIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='outlined / clickable / no start icon / end icon'
          variant='outlined'
          onClick={args.onClick}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='outlined / non-clickable / start icon / end icon'
          variant='outlined'
          startIcon={startIcon}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='outlined / clickable / start icon / end icon / selected'
          variant='outlined'
          selected
          onClick={args.onClick}
          startIcon={startIcon}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='filled / non-clickable / no start icon / no end icon' variant='filled' />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip label='filled / clickable / no start icon / no end icon' variant='filled' onClick={args.onClick} />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='filled / clickable / start icon / no end icon'
          variant='filled'
          onClick={args.onClick}
          startIcon={startIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='filled / clickable / no start icon / end icon'
          variant='filled'
          onClick={args.onClick}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='filled / non-clickable / start icon / end icon'
          variant='filled'
          startIcon={startIcon}
          endIcon={endIcon}
        />
        <hr css={{ width: '100%', margin: '8px 0' }} />
        <Chip
          label='filled / clickable / start icon / end icon / selected'
          variant='filled'
          selected
          onClick={args.onClick}
          startIcon={startIcon}
          endIcon={endIcon}
        />
      </div>
    );
  },
};
