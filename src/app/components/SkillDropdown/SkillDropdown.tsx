import React from 'react';
import { ThirdStepData } from '@components';
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
  const showSkills = skills.filter((skill) => skill.toLowerCase().includes(thirdStepState.searchSkill.toLowerCase()));
  // effects
  // handlers
  const handleAddSkill = (skill: string) => {
    onClick({
      ...thirdStepState,
      selectedSkill: [...thirdStepState.selectedSkill, skill],
      searchSkill: '',
    });
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
        {!showSkills.length ? (
          <p>해당하는 스킬이 없습니다.</p>
        ) : (
          showSkills.map((skill) => (
            <SkillTab
              css={[
                { width: '64px' },
                skill.length > 7 && skill.length < 14 && { width: '136px' },
                skill.length >= 14 && { width: '208px' },
              ]}
              key={skill}
              skill={skill}
              onAddSkill={handleAddSkill}
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
