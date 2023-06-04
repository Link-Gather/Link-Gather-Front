import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import { IconButton } from '@mui/material';

function VisibilityIconButton(props: { isShow: boolean; onClick: () => void; className?: string }) {
  // prop destruction
  const { isShow, onClick, className } = props;

  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <IconButton onClick={onClick}>
      {isShow ? (
        <IconPasswordShow className={className} css={{ width: '24px', height: '24px' }} />
      ) : (
        <IconPasswordHide className={className} css={{ width: '24px', height: '24px' }} />
      )}
    </IconButton>
  );
}

export { VisibilityIconButton };
