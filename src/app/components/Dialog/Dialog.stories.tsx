import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import { Button, DialogAction, DialogContent, DialogTitle } from '@elements';
import { Stack } from '@mui/material';

type ArgTypes = ComponentProps<typeof Dialog>;

export default {
  title: 'components/Dialog',
  component: Dialog,
  args: {
    width: '300px',
    height: '200px',
    children: (
      <Stack direction='column' height='100%'>
        <DialogTitle>dialog title</DialogTitle>
        <DialogContent>dialog content</DialogContent>
        <DialogAction>
          <Button css={{ width: '60px', height: '30px', border: '1px solid #000000', borderRadius: '15px' }}>
            닫기
          </Button>
          <Button css={{ width: '60px', height: '30px', border: '1px solid #000000', borderRadius: '15px' }}>
            확인
          </Button>
        </DialogAction>
      </Stack>
    ),
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
