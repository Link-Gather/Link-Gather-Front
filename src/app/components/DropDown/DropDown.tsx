import { CSSProperties, useState } from 'react';
import { useDialog } from '@hooks';
import { FlexBox } from '@elements';
import { type Theme } from '@libs/theme';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';

interface Props {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  className?: string;
  marginTop?: CSSProperties['marginTop'];
  marginLeft?: CSSProperties['marginLeft'];
  label?: string;
  value?: string;
}

function DropDown(props: Props) {
  // prop destruction
  const { isOpenDialog, openDialog, closeDialog, toggleDialog } = useDialog();
  const { width, marginTop, marginLeft, height, fontSize, color, backgroundColor, className, label, value, ...rest } =
    props;

  // lib hooks
  // state, ref hooks
  const [menu, setMenu] = useState<string | null>(null);
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <FlexBox direction='column' css={{ width, position: 'relative' }}>
      <FlexBox
        css={(theme: Theme) => {
          return [
            {
              height: height || '50px',
              marginTop: '5px',
              marginLeft,
              fontSize: fontSize || 20,
              fontWeight: 500,
              color,
              border: `2px solid ${theme.palette.secondary.n60}`,
              borderRadius: 8,
              backgroundColor,
              padding: '11px 16px 11px 16px',
              outline: 'none',
              position: 'relative',
            },
          ];
        }}
        className={className}
        {...rest}
      >
        <span
          css={(theme: Theme) => {
            return [
              {
                color: `${theme.palette.secondary.n60}`,
              },
            ];
          }}
        >
          {value}
        </span>
        <button
          css={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translate(0, -50%)',
            display: 'flex',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          type='button'
        >
          <img src={IconArrowLeft} alt='go back' css={{ transform: 'rotate(270deg)' }} />
        </button>
      </FlexBox>
    </FlexBox>
  );
}

export { DropDown };
