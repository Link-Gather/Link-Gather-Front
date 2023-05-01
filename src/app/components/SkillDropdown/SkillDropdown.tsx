import React from 'react';
import { FlexBox, SkillTab } from '@elements';
import { Theme } from '@libs/theme';

function SkillDropdown(props: {
  skills: { value: string }[];
  searchKeyword: string;
  onClick: (skill: string) => void;
}) {
  // prop destruction
  const { skills, searchKeyword, onClick } = props;
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  const showSkills = skills.filter((skill) => skill.value.toLowerCase().includes(searchKeyword.toLowerCase()));
  // effects
  // handlers

  return (
    <FlexBox
      css={(theme: Theme) => ({
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
      })}
    >
      <FlexBox css={{ flexWrap: 'wrap' }}>
        {!showSkills.length ? (
          <p>해당하는 스킬이 없습니다.</p>
        ) : (
          showSkills.map((skill) => (
            <SkillTab
              css={[
                { width: '64px' },
                skill.value.length > 7 && skill.value.length < 14 && { width: '136px' },
                skill.value.length >= 14 && { width: '208px' },
              ]}
              value={skill.value}
              key={skill.value}
              onClick={() => onClick(skill.value)}
            >
              {skill.value}
            </SkillTab>
          ))
        )}
      </FlexBox>
    </FlexBox>
  );
}

export { SkillDropdown };
