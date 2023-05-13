import { Theme } from '@libs/theme';
import DeleteIcon from '@assets/images/icons/icon-close.svg';

function StackChip(props: {
  name: string;
  length: number;
  onClick: () => void;
  className?: string;
  selected?: boolean;
}) {
  // prop destruction
  const { name, length, onClick, className, selected = false } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <div
      className={className}
      css={(theme: Theme) => [
        {
          fontSize: '12px',
          backgroundColor: theme.palette.secondary.n30,
          border: '1px solid #000',
          height: '22px',
          padding: theme.spacing(1, 2),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontWeight: 500,
          borderRadius: '20px',
          '&>:not(:first-of-type)': {
            marginLeft: '4px',
          },
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.palette.secondary.n60,
          },
        },
        length === 1 && { width: '64px' },
        length === 2 && { width: '136px' },
        length === 3 && { width: '212px' },
      ]}
      onClick={onClick}
    >
      <span>{name}</span>
      {selected && <DeleteIcon css={{ width: '12px', position: 'absolute', top: '-5px', right: '-5px' }} />}
    </div>
  );
}

export { StackChip };
