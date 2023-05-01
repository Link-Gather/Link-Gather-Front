import React, { MouseEventHandler } from 'react';
import DeleteSkillTabButton from '@assets/images/icons/delete-skillTab.svg';

const SkillTab = (props: {
  children: React.ReactNode;
  className?: string;
  value: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  onDeleteClick?: (skill: string) => void;
  selected?: boolean;
}) => {
  // prop destruction
  const { children, className, value, onClick, selected, onDeleteClick } = props;
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
          position: 'relative',
          backgroundColor: '#EBECF0',
          border: '1px solid #000000',
          borderRadius: '20px',
          height: '22px',
          lineHeight: '22px',
          fontSize: '14px',
          fontWeight: '500',
          textAlign: 'center',
          cursor: !selected ? 'pointer' : 'null',
          margin: '4px',
          width: '64px',
        },
        value.length > 7 && { width: '136px' },
        value.length >= 14 && { width: '208px' },
      ]}
      className={className}
      onClick={onClick}
    >
      {children}
      {selected && (
        <button
          css={{ position: 'absolute', top: '-5px', right: '-5px', cursor: 'pointer' }}
          onClick={() => onDeleteClick?.(value)}
        >
          <img alt='delete-skiltab' src={DeleteSkillTabButton} />
        </button>
      )}
    </div>
  );
};

export { SkillTab };
