import { Pagination as MuiPagination } from '@mui/material';

function Pagination(props: { className?: string; page: number; count: number; onChange: (page: number) => void }) {
  // prop destruction
  const { className, page, count, onChange } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
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
        count={count}
        boundaryCount={1}
        siblingCount={2}
        onChange={(_, page) => onChange(page)}
      />
    </div>
  );
}

export { Pagination };
