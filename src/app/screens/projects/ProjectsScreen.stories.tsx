import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProjectsScreen } from './ProjectsScreen';
import { rest } from 'msw';
import { API_ENDPOINT } from '../../configs';
import { projectList } from './data.mock';

type ArgTypes = ComponentProps<typeof ProjectsScreen>;

export default {
  title: 'screens/ProjectsScreen',
  component: ProjectsScreen,
  args: {},
  parameters: {
    msw: {
      handlers: {
        getProjects: rest.get(`${API_ENDPOINT}/projects`, (req, res, ctx) => res(ctx.json({ data: projectList }))),
      },
    },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
