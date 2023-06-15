import { Pagination as MuiPagination } from '@mui/material';
import { useMemo } from 'react';

function Pagination(props: {
  className?: string;
  page: number;
  count?: number;
  limit: number;
  onChange: (page: number) => void;
}) {
  // prop destruction
  const { className, page, count = 0, onChange, limit } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  const totalCount = useMemo(() => {
    if (count !== undefined) {
      return Math.ceil(count / limit);
    }

    return 1;
  }, [count, limit]);
  // effects
  // handlers
  return (
    <div
      className={className}
      css={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <MuiPagination
        size='small'
        page={page}
        count={totalCount}
        boundaryCount={1}
        siblingCount={2}
        onChange={(_, page) => onChange(page)}
      />
    </div>
  );
}

export { Pagination };
