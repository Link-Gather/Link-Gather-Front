import { useDialog } from '@hooks';
import { FlexBox } from '@elements';
import { ThirdStepData } from 'app/screens/sign-up/signupbox/types';
import palette from '@libs/theme/palettes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';

function DropDown(props: {
  className?: string;
  value?: string;
  data: string[];
  selectedItem: string;
  thirdStepState: ThirdStepData;
  onClick: (value: ThirdStepData) => void;
}) {
  // prop destruction
  const { isOpenDialog, closeDialog, toggleDialog } = useDialog();
  const { className, value, data, selectedItem, thirdStepState, onClick } = props;

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
        css={{
          height: '50px',
          marginTop: '5px',
          fontSize: '20px',
          fontWeight: 500,
          border: `2px solid ${isOpenDialog || selectedItem ? palette.black.main : palette.secondary.n60}`,
          borderRadius: 8,
          padding: '11px 16px 11px 16px',
          outline: 'none',
          position: 'relative',
        }}
        className={className}
      >
        <span
          css={{
            color: selectedItem ? palette.black.main : palette.secondary.n60,
          }}
        >
          {selectedItem ? selectedItem : value}
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
            css={{
              width: '100%',
              border: `2px solid ${palette.black.main}`,
              position: 'absolute',
              top: '105%',
              left: '0',
              backgroundColor: palette.paper,
              borderRadius: '8px',
              boxShadow: `3px 5px 0px ${palette.black.main}`,
              zIndex: '2',
            }}
          >
            <ul css={{ padding: '10px 0px' }}>
              {data.map((data) => {
                return (
                  <li
                    key={data}
                    css={{
                      fontSize: '16px',
                      margin: '10px 15px',
                      cursor: 'pointer',
                      '&:hover': {
                        color: palette.primary.main,
                      },
                    }}
                    onClick={() => {
                      onClick(
                        selectedItem === thirdStepState.selectedJob
                          ? { ...thirdStepState, selectedJob: data }
                          : { ...thirdStepState, selectedExperience: data }
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
