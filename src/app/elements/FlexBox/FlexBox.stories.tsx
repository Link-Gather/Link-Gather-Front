import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from './FlexBox';

type ArgTypes = ComponentProps<typeof FlexBox>;

export default {
  title: 'elements/FlexBox',
  component: FlexBox,
  args: {
    width: '100%',
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'row',
    spacing: 4,
    children: (
      <>
        <div style={{ width: '200px', height: '200px', backgroundColor: 'yellow' }}>first box</div>
        <div style={{ width: '200px', height: '200px', backgroundColor: 'orange' }}>second box</div>
        <div style={{ width: '200px', height: '200px', backgroundColor: 'green' }}>third box</div>
      </>
    ),
  },
  argTypes: {
    justifyContent: { type: 'string' },
    justifyItems: { type: 'string' },
    alignContent: { type: 'string' },
    alignItems: { type: 'string' },
    direction: { type: 'string' },
    spacing: { type: 'number' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
