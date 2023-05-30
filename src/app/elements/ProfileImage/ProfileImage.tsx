function ProfileImage(props: { src: string; className?: string; onClick?: () => void }) {
  // prop destruction
  const { src, className, onClick } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  const [backgroundColor, imgCss] = (() => {
    const character = src.split('/').slice(-1)[0].split('.')[0];
    switch (character) {
      case 'arthur':
        return ['#F4F75F', { width: '63.04%', top: '21.74%', left: '21.74%' }];
      case 'dangdangdi':
        return ['#F75F5F', { width: '41.3%', top: '13.04%', left: '32.61%' }];
      case 'bocha':
        return ['#74F75F', { width: '52.17%', top: '13.04%', left: '26.09%' }];
      case 'anjob':
        return ['#F7D65F', { width: '58.7%', top: '13.04%', left: '19.57%' }];
      case 'dororong':
        return ['#5FA5F7', { width: '58.7%', top: '13.04%', left: '23.91%' }];
      case 'bunso':
        return ['#BD5FF7', { width: '41.3%', top: '13.04%', left: '32.61%' }];
      case 'umshe':
        return ['#F75FA8', { width: '41.3%', top: '13.04%', left: '32.61%' }];
      case 'duhong':
        return ['#5555FF', { width: '41.3%', top: '13.04%', left: '30.43%' }];
      default:
        return undefined as never;
    }
  })();
  // effects
  // handlers
  return (
    <div
      className={className}
      css={{
        width: '48px',
        height: '48px',
        border: '1px solid #000',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={onClick}
    >
      <img css={{ position: 'absolute', height: '102.17%', ...imgCss }} src={src} alt='profile' />
    </div>
  );
}

export { ProfileImage };
