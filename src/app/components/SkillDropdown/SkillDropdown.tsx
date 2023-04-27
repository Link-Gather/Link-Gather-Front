import React from 'react';
import { FlexBox, SkillTab } from '@elements';
import palette from '@libs/theme/palettes';

function SkillDropdown(props: { skills: string[]; keyword: string; onClick: (skill: string) => void }) {
  // prop destruction
  const { skills, keyword, onClick } = props;
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  const showSkills = skills.filter((skill) => skill.toLowerCase().includes(keyword.toLowerCase()));
  // effects
  // handlers

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
              skill={skill}
              key={skill}
              onClick={() => onClick(skill)}
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
