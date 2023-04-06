import React from 'react';
import { type Theme } from '@libs/theme';
import { ThirdStepData } from 'app/screens/sign-up/signupbox/types';
import { FlexBox, SkillTab } from '@elements';

const SkillDropdown = (props: {
  skills: string[];
  thirdStepState: ThirdStepData;
  setThirdStepState: React.Dispatch<React.SetStateAction<ThirdStepData>>;
}) => {
  // prop destruction
  const { skills, thirdStepState, setThirdStepState } = props;
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  const showSkills = skills.filter((skillFilter) =>
    skillFilter.toLowerCase().includes(thirdStepState.searchSkill.toLowerCase())
  );
  // effects
  // handlers
  const addSkill = (skill: string) => {
    setThirdStepState({
      ...thirdStepState,
      selectedSkill: [...thirdStepState.selectedSkill, skill],
      searchSkill: '',
    });
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
