import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkillDropdown } from './SkillDropdown';

type ArgTypes = ComponentProps<typeof SkillDropdown>;

export default {
  title: 'components/SkillDropdown',
  component: SkillDropdown,
  args: {
    skills: [
      { value: 'Figma', length: 1 },
      { value: 'Java', length: 1 },
      { value: 'Adobe Illustration', length: 3 },
      { value: 'Spring', length: 1 },
      { value: 'HTML', length: 1 },
      { value: 'CSS', length: 1 },
      { value: 'Spring Boot', length: 2 },
      { value: 'Python', length: 1 },
      { value: 'Node.js', length: 2 },
      { value: 'React Native', length: 2 },
      { value: 'PHP', length: 1 },
      { value: 'C#', length: 1 },
      { value: 'Vue.js', length: 1 },
      { value: 'React.js', length: 2 },
      { value: 'TypeScript', length: 2 },
      { value: 'Styled-Components', length: 3 },
      { value: 'OpenGL', length: 1 },
      { value: 'Storybook', length: 1 },
      { value: 'Recoil', length: 1 },
      { value: 'CassandraDB', length: 2 },
      { value: 'Google Firebase', length: 3 },
      { value: 'Google BigQuery', length: 3 },
      { value: 'AWS DynamoDB', length: 2 },
      { value: 'AWS CodePipeline', length: 3 },
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
