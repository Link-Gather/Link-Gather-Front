import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkillDropdown } from './SkillDropdown';

type ArgTypes = ComponentProps<typeof SkillDropdown>;

export default {
  title: 'components/SkillDropdown',
  component: SkillDropdown,
  args: {
    skills: [
      'Figma',
      'Java',
      'Adobe Illustration',
      'Spring',
      'HTML',
      'CSS',
      'Spring Boot',
      'Python',
      'Node.js',
      'React Native',
      'PHP',
      'C#',
      'Vue.js',
      'React.js',
      'TypeScript',
      'A Really Long Name Stack',
      'Styled-Components',
      'OpenGL',
      'Storybook',
      'Recoil',
      'CassandraDB',
      'Google Firebase',
      'Google BigQuery',
      'AWS DynamoDB',
      'AWS CodePipeline',
    ],
    searchKeyword: 'j',
  },
  onClick: { action: 'onClick' },
} as Meta<ArgTypes>;

export const Default = (args: ArgTypes) => (
  <div style={{ position: 'fixed', top: '0', width: '500px' }}>
    <SkillDropdown skills={args.skills} searchKeyword={args.searchKeyword} onClick={args.onClick} />
  </div>
);
