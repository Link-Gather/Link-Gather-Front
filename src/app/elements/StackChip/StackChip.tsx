import { Theme } from '@libs/theme';
import DeleteIcon from '@assets/images/icons/icon-delete.svg';
import { Stack } from '@mui/material';

function StackChip(props: {
  name: React.ReactNode;
  length: 1 | 2 | 3;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
  EndIcon?: JSX.Element;
}) {
  // prop destruction
  const { name, length, onClick, className, selected = false, EndIcon } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <Stack
      direction='row'
      className={className}
      css={(theme: Theme) => [
        {
          fontSize: '12px',
          backgroundColor: theme.palette.secondary.n30,
          border: '1px solid #000',
          height: '22px',
          padding: theme.spacing(1, 2),
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontWeight: 500,
          borderRadius: '20px',
          '&>:not(:first-of-type)': {
            marginLeft: '4px',
          },
          cursor: onClick ? 'pointer' : undefined,
        },
        onClick && {
          '&:hover': {
            backgroundColor: theme.palette.secondary.n60,
          },
        },
        length === 1 && { width: '68px' },
        length === 2 && { width: '136px' },
        length === 3 && { width: '204px' },
      ]}
      onClick={onClick}
    >
      <span
        css={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </span>
      {selected && <DeleteIcon css={{ width: '12px', position: 'absolute', top: '-5px', right: '-5px' }} />}
      {EndIcon}
    </Stack>
  );
}

export { StackChip };
