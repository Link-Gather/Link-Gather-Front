import React from 'react';
import { type Theme } from '@libs/theme';
import { skills } from 'app/screens/data.mock';

const SkillDropdown = ({ searchSkill }: { searchSkill: string }) => {
  return (
    <div
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
            flexWrap: 'wrap',
            padding: '8px',
          },
        ];
      }}
    >
      {skills
        .filter((skillFilter) => skillFilter.toLowerCase().includes(searchSkill.toLowerCase()))
        .map((skill) => {
          return (
            <li
              css={{
                backgroundColor: '#EBECF0',
                border: '1px solid #000000',
                borderRadius: '20px',
                width: '136px',
                height: '22px',
                lineHeight: '22px',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              key={skill}
            >
              {skill}
            </li>
          );
        })}
      {/* <ul css={{ padding: '10px 0px' }}>
        {data.map((data) => {
          return (
            <li
              key={data}
              css={(theme: Theme) => {
                return [
                  {
                    fontSize: '16px',
                    margin: '10px 15px',
                    cursor: 'pointer',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  },
                ];
              }}
              onClick={() => {
                setSelectItem(data);
                closeDialog();
              }}
            >
              {data}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export { SkillDropdown };
