import React from 'react';
import { type Theme } from '@libs/theme';
import { skills } from 'app/screens/data.mock';
import { FlexBox } from '@elements';

const SkillDropdown = ({ searchSkill }: { searchSkill: string }) => {
  return (
    <FlexBox
      css={(theme: Theme) => {
        return [
          {
            width: '100%',
            minHeight: '68px',
            maxHeight: '98px',
            border: `2px solid ${theme.palette.black.main}`,
            position: 'absolute',
            top: '95%',
            backgroundColor: theme.palette.paper,
            borderRadius: '8px',
            boxShadow: `3px 5px 0px ${theme.palette.black.main}`,
            zIndex: '2',
            display: 'flex',
            overflow: 'auto',
            padding: '4px',
          },
        ];
      }}
    >
      <FlexBox css={{ flexWrap: 'wrap' }}>
        {skills
          .filter((skillFilter) => skillFilter.toLowerCase().includes(searchSkill.toLowerCase()))
          .map((skill) => (
            <li
              css={{
                backgroundColor: '#EBECF0',
                border: '1px solid #000000',
                borderRadius: '20px',
                width: skill.length < 7 ? '64px' : skill.length < 14 ? '136px' : '208px',
                height: '22px',
                lineHeight: '22px',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'center',
                cursor: 'pointer',
                margin: '4px',
              }}
              key={skill}
            >
              {skill}
            </li>
          ))}
      </FlexBox>
    </FlexBox>
  );
};

export { SkillDropdown };
