import { useDialog } from '@hooks';
import { FlexBox } from '@elements';
import { ThirdStepData } from '@screens';
import palette from '@libs/theme/palettes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';

function DropDown(props: {
  className?: string;
  options?: { label: string; value: string }[];
  selectedItem: string;
  thirdStepState: ThirdStepData;
  required?: boolean;
}) {
  // prop destruction
  const { className, options, selectedItem, thirdStepState, required } = props;
  // const { label, value } = options;

  // lib hooks
  const { isOpenDialog, closeDialog, toggleDialog } = useDialog();
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  //n300 n500
  return (
    <FlexBox direction='column'>
      <select
        css={{
          marginTop: '8px',
          padding: '12px 12px 12px 16px',
          border: `2px solid ${palette.secondary.n300}`,
          borderRadius: '8px',
          fontSize: '16px',
        }}
      >
        <option css={{ padding: '10px' }}>fds</option>
        <option css={{ padding: '10px' }}>ffdsds</option>
        <option css={{ padding: '10px' }}>fdds</option>
      </select>
    </FlexBox>
  );
}

export { DropDown };
