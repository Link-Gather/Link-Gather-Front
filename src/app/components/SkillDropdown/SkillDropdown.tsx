import React from 'react';
import { type Theme } from '@libs/theme';
import { ThirdStepData } from '../SignupBox';
import { FlexBox, SkillTab } from '@elements';
import palette from '@libs/theme/palettes';

function SkillDropdown(props: {
  skills: string[];
  thirdStepState: ThirdStepData;
  onClick: (value: ThirdStepData) => void;
}) {
  // prop destruction
  const { skills, thirdStepState, onClick } = props;
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
    onClick({
      ...thirdStepState,
      selectedSkill: [...thirdStepState.selectedSkill, skill],
      searchSkill: '',
    });
  };

  const getWidth = (skill: string) => {
    if (skill.length < 7) return '64px';
    if (skill.length < 14) return '136px';
    if (skill.length > 14) return '208px';
  };

  return (
    <FlexBox
      css={{
        width: '100%',
        minHeight: '68px',
        maxHeight: '98px',
        border: `2px solid ${palette.black.main}`,
        position: 'absolute',
        top: '99%',
        backgroundColor: palette.paper,
        borderRadius: '8px',
        boxShadow: `3px 5px 0px ${palette.black.main}`,
        zIndex: '2',
        display: 'flex',
        overflow: 'auto',
        padding: '4px',
      }}
    >
      <FlexBox css={{ flexWrap: 'wrap' }}>
        {showSkills.length === 0 ? (
          <p>해당하는 스킬이 없습니다.</p>
        ) : (
          showSkills.map((skill) => (
            <SkillTab
              css={{
                width: getWidth(skill),
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
}

export { SkillDropdown };
