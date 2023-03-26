import React from 'react';
import { type Theme } from '@libs/theme';
import { skills } from 'app/screens/data.mock';
import { FlexBox, SkillTab } from '@elements';

const SkillDropdown = (props: {
  searchSkill: string;
  setSearchSkill: React.Dispatch<React.SetStateAction<string>>;
  selectSkill: string[];
  setSelectSkill: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  // prop destruction
  const { searchSkill, setSearchSkill, selectSkill, setSelectSkill } = props;
  // lib hooks
  // state, ref, querystring hooks

  // form hooks
  // query hooks
  // calculated values
  const showSkills = skills.filter((skillFilter) => skillFilter.toLowerCase().includes(searchSkill.toLowerCase()));
  // effects
  // handlers
  const addSkill = (skill: string) => {
    setSelectSkill([...selectSkill, skill]);
    setSearchSkill('');
  };

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
            top: '99%',
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
        {showSkills.length === 0 ? (
          <p>해당하는 스킬이 없습니다.</p>
        ) : (
          showSkills.map((skill) => (
            <SkillTab
              css={{
                width: skill.length < 7 ? '64px' : skill.length < 14 ? '136px' : '208px',
              }}
              key={skill}
              skill={skill}
              addSkill={addSkill}
            >
              {skill}
            </SkillTab>
          ))
        )}
      </FlexBox>
    </FlexBox>
  );
};

export { SkillDropdown };
