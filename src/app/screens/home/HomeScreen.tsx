import { Link } from 'react-router-dom';
import { Divider, Stack, Typography, keyframes } from '@mui/material';
import type { Theme } from '../../libs/theme';
import { PATH_PROJECTS_ADD } from '../../routes';
import { lazy, useEffect, useRef, useState } from 'react';
import { S3_IMAGE_BUCKET } from '../../configs';
const BackgroundLeftPlanet = lazy(() => import('@assets/images/backgrounds/background-landing-planet.svg'));
const BackgroundRightPlanet = lazy(() => import('@assets/images/backgrounds/background-landing-planet-right.svg'));
const BackgroundRightAstronaut = lazy(
  () => import('@assets/images/backgrounds/background-landing-astronaut-right.svg')
);
const BackgroundLeftAstronaut = lazy(() => import('@assets/images/backgrounds/background-landing-astronaut-left.svg'));
const PlanetLinkGather = lazy(() => import('@assets/images/backgrounds/planet-link-gather.svg'));
const Comet = lazy(() => import('@assets/images/backgrounds/background-comet.svg'));
const YellowComet = lazy(() => import('@assets/images/backgrounds/background-comet-yellow.svg'));
const BlinkStar = lazy(() => import('@assets/images/backgrounds/background-blink-star.svg'));

const fall = keyframes`
  0% {
    transform: translate(100%,-100%);
    width: 0%;
  }
  100% {
    transform: translate(-100%,100%);
    width: 10%;
  }
`;
const yellowFall = keyframes`
0% {
  transform: translate(100%,-100%);
  width: 1%;
}
100% {
  transform: translate(-300%,100%);
  width: 5%;
}
`;

const blink = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

function TypingText(props: { text: string[]; className?: string }) {
  // prop destruction
  const { text, className } = props;
  // lib hooks
  // state, ref hooks
  const [isVisible, setIsVisible] = useState(false);
  const [completed, setCompleted] = useState(text.map(() => false));
  const [currentTyped, setCurrentTyped] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  // query hooks
  // calculated values
  // effects
  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible && currentTextIndex <= text.length - 1) {
        if (count <= text[currentTextIndex].length - 1) {
          setCurrentTyped((prev) => prev + (text[currentTextIndex][count] || ' '));
          setCount((prev) => prev + 1);
        } else {
          setCompleted((prev) => prev.map((v, i) => (i === currentTextIndex ? true : v)));
          setCurrentTextIndex((prev) => prev + 1);
          setCount(0);
          setCurrentTyped('');
        }
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [count, currentTextIndex, isVisible, text]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // handlers
  return (
    <Stack direction='column' spacing='48px' className={className} ref={ref}>
      {text.map((t, i) => {
        return completed[i] ? (
          <Typography
            key={t}
            variant='h3'
            css={{
              fontSize: '40px',
              fontWeight: 500,
              fontFamily: 'Montserrat',
              color: '#fff',
            }}
          >
            {t}
          </Typography>
        ) : null;
      })}
      {currentTyped && (
        <Typography
          variant='h3'
          css={{
            fontSize: '40px',
            fontWeight: 500,
            fontFamily: 'Montserrat',
            color: '#fff',
            '&::after': {
              content: '""',
              marginLeft: '2px',
              borderRight: '3px solid #fff',
            },
          }}
        >
          {currentTyped}
        </Typography>
      )}
    </Stack>
  );
}

function HomeScreen() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <Stack direction='column' css={{ position: 'relative' }}>
      <img src={`${S3_IMAGE_BUCKET}/background-landing.png`} alt='background' css={{ aspectRatio: '1920/5989' }} />
      <BlinkStar
        css={{ position: 'absolute', top: '1%', left: '35%', width: '1%', animation: `${blink} 1s infinite` }}
      />
      <BlinkStar
        css={{ position: 'absolute', top: '3%', right: '15%', width: '1%', animation: `${blink} 1s infinite` }}
      />
      <YellowComet
        css={{ position: 'absolute', top: '1%', left: '30%', width: '5%', animation: `${yellowFall} 1s forwards` }}
      />
      <Comet
        css={{ position: 'absolute', top: '4.5%', right: '50%', width: '10%', animation: `${fall} 2s forwards` }}
      />
      <BackgroundRightPlanet css={{ position: 'absolute', top: '4.5%', right: '5%', width: '40%' }} />
      <BackgroundRightAstronaut css={{ position: 'absolute', top: '4%', right: '15%', width: '20%' }} />
      <TypingText
        text={['또 삽질만 하다가 탈주한 동료들...', '지독히 외롭다...']}
        css={{ position: 'absolute', top: '3.5%', left: '10%' }}
      />
      <BlinkStar
        css={{ position: 'absolute', top: '14%', left: '40%', width: '1%', animation: `${blink} 1s infinite` }}
      />
      <BlinkStar
        css={{ position: 'absolute', top: '23%', left: '46%', width: '1%', animation: `${blink} 1s infinite` }}
      />
      <YellowComet
        css={{ position: 'absolute', top: '23%', right: '7%', width: '5%', animation: `${yellowFall} 1s 2` }}
      />
      <BackgroundLeftPlanet css={{ position: 'absolute', top: '18%', left: 0, width: '35%' }} />
      <BackgroundLeftAstronaut css={{ position: 'absolute', top: '16.5%', left: '1%', width: '18%' }} />
      <TypingText
        text={['나는 동료를 구할 수 없는 걸까..?']}
        css={{ position: 'absolute', top: '17.5%', left: '65%' }}
      />
      <TypingText text={['어... 저 빛은 뭐지?']} css={{ position: 'absolute', top: '45%', left: '43%' }} />
      <PlanetLinkGather css={{ position: 'absolute', top: '53%', right: '42%', color: '#fff', width: '15%' }} />
      <Stack direction='column' spacing='11%' css={{ margin: '12% 120px 13%' }}>
        <Stack direction='row' spacing='80px'>
          {/* TODO: 사진으로 변경 */}
          <div css={{ border: '1px solid #000', width: '913px', height: '514px', flexShrink: 0 }} />
          <Stack direction='column' spacing='16px'>
            <Typography variant='h3' css={{ fontSize: '40px', fontWeight: 600, fontFamily: 'Montserrat' }}>
              동료 찾기
            </Typography>
            <Typography variant='h3' css={{ fontSize: '40px', fontWeight: 500, fontFamily: 'Montserrat' }}>
              나에게 딱맞는 동료를 찾고,
              <br />
              프로젝트 제안하기
            </Typography>
            {/* TODO:사진으로 변경 */}
            <div css={{ width: '145px', marginTop: '48px !important' }} />
          </Stack>
        </Stack>
        <Stack direction='row' spacing='80px'>
          {/* TODO: 사진으로 변경 */}
          <div css={{ border: '1px solid #000', width: '913px', height: '514px', flexShrink: 0 }} />
          <Stack direction='column' spacing='16px'>
            <Typography variant='h3' css={{ fontSize: '40px', fontWeight: 600, fontFamily: 'Montserrat' }}>
              프로젝트 관리
            </Typography>
            <Typography variant='h3' css={{ fontSize: '40px', fontWeight: 500, fontFamily: 'Montserrat' }}>
              목표를 공유하며 함께 관리하는 프로젝트
            </Typography>
          </Stack>
        </Stack>
        <Stack direction='row' spacing='80px'>
          {/* TODO: 사진으로 변경 */}
          <div css={{ border: '1px solid #000', width: '913px', height: '514px', flexShrink: 0 }} />
          <Stack direction='column' spacing='16px'>
            <Typography variant='h3' css={{ fontSize: '40px', fontWeight: 600, fontFamily: 'Montserrat' }}>
              프로젝트 구경가기
            </Typography>
            <Typography variant='h3' css={{ fontSize: '40px', fontWeight: 500, fontFamily: 'Montserrat' }}>
              다른 프로젝트는 어떻게 진행하는지 구경하기
              <Typography component='span' css={{ fontSize: '32px', fontWeight: 500, fontFamily: 'Montserrat' }}>
                *공개 설정한 프로젝트에 한해
              </Typography>
            </Typography>
            {/* TODO:사진으로 변경 */}
            <div css={{ width: '145px', marginTop: '48px !important' }} />
          </Stack>
        </Stack>
        <Divider />
        <Stack direction='column' css={{ marginLeft: '160px !important' }}>
          <Typography variant='h2' css={{ fontSize: '64px', fontWeight: 600 }}>
            링크게더와 함께 하고 싶다면?
          </Typography>
          <Typography variant='h5' css={{ fontWeight: 400, margin: '24px 0 40px 0' }}>
            아직도 혼자 프로젝트 하세요?
            <br />
            마음이 맞는 동료와 함께 하세요!
          </Typography>
          <Link
            css={(theme: Theme) => ({
              width: '282px',
              height: '64px',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '6px',
              color: '#fff',
              padding: '20px 0',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: 700,
              fontFamily: 'Noto Sans',
            })}
            to={PATH_PROJECTS_ADD}
          >
            프로젝트 생성
          </Link>
        </Stack>
      </Stack>
      <div
        css={{
          width: '544px',
          height: '506px',
          position: 'absolute',
          bottom: 0,
          right: '10%',
          border: '1px solid #000',
        }}
      />
    </Stack>
  );
}

export { HomeScreen };
