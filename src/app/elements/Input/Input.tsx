import { CSSProperties, useId } from 'react';
// import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import type { Theme } from '@libs/theme';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: 'default' | 'focus' | 'error';
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  className?: string;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

function Input(props: Props) {
  // prop destruction
  const { inputType, type, width, height, fontSize, color, backgroundColor, onChange, className, ...rest } = props;

  // TODO: input type에 따라서 다른 스타일을 적용해야 함

  // lib hooks
  const inputId = useId();
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  console.log(props.type);
  return (
    <label htmlFor={inputId}>
      <input
        id={inputId}
        css={(theme: Theme) => {
          return [
            {
              width,
              height,
              fontSize: fontSize || 20,
              fontWeight: 500,
              color,
              border: `2px solid ${theme.palette.secondary.n60}`,
              borderRadius: 8,
              backgroundColor,
              padding: '11px 50px 11px 16px',
              cursor: 'pointer',
              outline: 'none',
              '&::placeholder': {
                color: theme.palette.secondary.n60,
              },
              '&:focus': {
                border: `2px solid ${theme.palette.primary.main}`,
              },
              '&[inputType="error"]': {
                border: `2px solid ${theme.palette.secondary.red}`,
              },
            },
          ];
        }}
        className={className}
        onChange={onChange}
        {...rest}
      />
    </label>
  );
}

export { Input };
