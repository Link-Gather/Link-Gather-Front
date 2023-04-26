import React, { MouseEventHandler } from 'react';

const SkillTab = (props: {
  children: React.ReactNode;
  className?: string;
  skill: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  // prop destruction
  const { children, className, skill, onClick } = props;
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      css={[
        {
          backgroundColor: '#EBECF0',
          border: '1px solid #000000',
          borderRadius: '20px',
          height: '22px',
          lineHeight: '22px',
          fontSize: '14px',
          fontWeight: '500',
          textAlign: 'center',
          cursor: 'pointer',
          margin: '4px',
          width: '64px',
        },
        skill.length > 7 && { width: '136px' },
        skill.length >= 14 && { width: '208px' },
      ]}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { SkillTab };
