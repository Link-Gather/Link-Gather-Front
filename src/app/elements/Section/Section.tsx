import { ReactNode } from 'react';

/**
 * section을 구분해준다.
 * @returns
 */
function Section(props: { children: ReactNode; className?: string }) {
  // prop destruction
  const { children, className } = props;
  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div css={{ width: '100%', margin: '0 auto', overflow: 'hidden' }} className={className}>
      {children}
    </div>
  );
}

export { Section };
