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
      case 'lizard':
        return ['#F4F75F', { width: '46.95%', height: '100%', top: '6.52%', left: '28.26%' }];
      case 'grey':
        return ['#F75F5F', { width: '58.7%', height: '91.3%', top: '17.4%', left: '21.74%' }];
      case 'pink':
        return ['#74F75F', { width: '84.78%', height: '84.78%', top: '19.57%', left: '13.04%' }];
      case 'flower':
        return ['#F7D65F', { width: '69.57%', height: '91.3%', top: '13.04%', left: '15.22%' }];
      case 'pigtail':
        //TODO: 가로세로 비율이 달라서 수정이 필요함. 일단은 대충함.
        return ['#5FA5F7', { width: '90.17%', height: '77.7%', top: '26.65%', left: '6.52%' }];
      case 'orange':
        return ['#BD5FF7', { width: '41.3%', height: '104.35%', top: '17.39%', left: '32.61%' }];
      case 'yellow':
        return ['#F75FA8', { width: '45.65%', height: '110.87%', top: '10.87%', left: '30.43%' }];
      case 'peanut':
        return ['#5555FF', { width: '54.35%', height: '106.52%', top: '6.52%', left: '23.91%' }];
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
      <img css={{ position: 'absolute', ...imgCss }} src={src} alt='profile' />
    </div>
  );
}

export { ProfileImage };
