import { CSSProperties, useId, useState, useRef } from 'react';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import type { Theme } from '@libs/theme';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: 'default' | 'focus' | 'error' | null;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  className?: string;
  marginTop?: CSSProperties['marginTop'];
  marginLeft?: CSSProperties['marginLeft'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
}

function Input(props: Props) {
  // prop destruction
  const {
    inputType,
    type,
    width,
    marginTop,
    marginLeft,
    height,
    fontSize,
    color,
    backgroundColor,
    onChange,
    className,
    label,
    value,
    ...rest
  } = props;

  // lib hooks
  const inputId = useId();

  // state, ref hooks
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  const handlePasswordShow = () => {
    setIsShowPassword(!isShowPassword);
    if (inputRef.current) {
      inputRef.current.type = isShowPassword ? 'password' : 'text';
    }
  };
  return (
    <label
      htmlFor={inputId}
      css={{
        position: 'relative',
      }}
    >
      <input
        id={inputId}
        type={type}
        css={(theme: Theme) => {
          return [
            {
              width,
              height,
              marginTop,
              marginLeft,
              fontSize: fontSize || 20,
              fontWeight: 500,
              color,
              border: `2px solid ${
                value
                  ? inputType === 'error'
                    ? theme.palette.secondary.red
                    : theme.palette.black.main
                  : theme.palette.secondary.n60
              }`,
              borderRadius: 8,
              backgroundColor,
              padding: '11px 16px 11px 16px',
              outline: 'none',
              '&::placeholder': {
                color: theme.palette.secondary.n60,
              },
              '&:focus': {
                border: `2px solid ${inputType === 'error' ? theme.palette.secondary.red : theme.palette.primary.main}`,
              },
              '&[inputType="error"]': {
                border: `2px solid ${theme.palette.secondary.red}`,
              },
            },
          ];
        }}
        className={className}
        onChange={onChange}
        ref={inputRef}
        {...rest}
      />
      {label && (
        <span
          css={(theme: Theme) => {
            return [
              {
                position: 'absolute',
                fontSize: '12px',
                lineHeight: '20px',
                left: '0',
                top: '100%',
                weight: '400',
                color: inputType === 'error' ? theme.palette.secondary.red : theme.palette.secondary.n300,
              },
            ];
          }}
        >
          {label}
        </span>
      )}
      <button
        css={{
          position: 'absolute',
          top: '0',
          right: '8px',
          display: 'flex',
          alignItems: 'center',
          height,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
        type='button'
        onClick={type === 'password' ? handlePasswordShow : () => {}}
      >
        {type === 'email' && <img src={IconCheckGreen} alt='check' />}
        {type === 'password' && <img src={isShowPassword ? IconPasswordShow : IconPasswordHide} alt='password' />}
      </button>
    </label>
  );
}

export { Input };
