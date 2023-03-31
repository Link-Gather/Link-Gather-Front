import { useDialog } from '@hooks';
import { FlexBox } from '@elements';
import { type Theme } from '@libs/theme';
import { ThirdStepData } from 'app/screens/sign-up/signupbox/types';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';

interface Props {
  className?: string;
  value?: string;
  data: string[];
  selectItem: string;
  thirdStepState: ThirdStepData;
  setThirdStepState: React.Dispatch<React.SetStateAction<ThirdStepData>>;
}

function DropDown(props: Props) {
  // prop destruction
  const { isOpenDialog, openDialog, closeDialog, toggleDialog } = useDialog();
  const { className, value, data, selectItem, thirdStepState, setThirdStepState, ...rest } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <FlexBox direction='column' css={{ position: 'relative' }}>
      <FlexBox
        css={(theme: Theme) => {
          return [
            {
              height: '50px',
              marginTop: '5px',
              fontSize: 20,
              fontWeight: 500,
              border: `2px solid ${
                isOpenDialog || selectItem ? theme.palette.black.main : theme.palette.secondary.n60
              }`,
              borderRadius: 8,
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
                color: selectItem ? theme.palette.black.main : theme.palette.secondary.n60,
              },
            ];
          }}
        >
          {selectItem ? selectItem : value}
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
          onClick={toggleDialog}
        >
          <img src={IconArrowLeft} alt='go back' css={{ transform: 'rotate(270deg)', width: '25px' }} />
        </button>
        {isOpenDialog && (
          <div
            css={(theme: Theme) => {
              return [
                {
                  width: '100%',
                  border: `2px solid ${theme.palette.black.main}`,
                  position: 'absolute',
                  top: '105%',
                  left: '0',
                  backgroundColor: theme.palette.paper,
                  borderRadius: '8px',
                  boxShadow: `3px 5px 0px ${theme.palette.black.main}`,
                  zIndex: '2',
                },
              ];
            }}
          >
            <ul css={{ padding: '10px 0px' }}>
              {data.map((data) => {
                return (
                  <li
                    key={data}
                    css={(theme: Theme) => {
                      return [
                        {
                          fontSize: '16px',
                          margin: '10px 15px',
                          cursor: 'pointer',
                          '&:hover': {
                            color: theme.palette.primary.main,
                          },
                        },
                      ];
                    }}
                    onClick={() => {
                      setThirdStepState(
                        selectItem === thirdStepState.selectJob
                          ? { ...thirdStepState, selectJob: data }
                          : { ...thirdStepState, selectExperience: data }
                      );
                      closeDialog();
                    }}
                  >
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </FlexBox>
    </FlexBox>
  );
}

export { DropDown };
