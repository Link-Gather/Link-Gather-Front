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

export const Default: StoryObj<ArgTypes> = {
  render: (args) => {
    return (
      <div
        css={{
          height: '150px',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}
      >
        <Chip {...args} />
        <Chip {...args} label='simply dummy text' onClick={undefined} />
        <Chip
          {...args}
          label='the printing and typesetting industry'
          startIcon={
            <span
              css={{
                width: '15px',
                height: '15px',
                display: 'block',
                borderRadius: '50%',
                border: '1px solid #000',
              }}
            />
          }
        />
        <Chip
          {...args}
          label={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
          endIcon={
            <span
              css={{
                width: '20px',
                height: '20px',
                display: 'block',
                borderRadius: '50%',
                backgroundColor: '#015dee',
                color: '#FFF',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              X
            </span>
          }
        />
      </div>
    );
  },
};
