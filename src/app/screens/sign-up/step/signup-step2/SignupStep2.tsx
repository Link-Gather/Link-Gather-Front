import { ChangeEvent, useState } from 'react';
import { characters } from 'app/screens/data.mock';
import { FlexBox, Input, RequestButton, ImageBox, Button } from '@elements';
import palette from '@libs/theme/palettes';

interface Props {
  id: number;
  src: string;
  backgroundColor: string;
  width: string;
  height: string;
  marginTop: string;
}

const SignupStep2 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [characterState, setCharacterState] = useState<Props>(characters[0]);
  const [nickname, setNickname] = useState<string>('');
  // form hooks
  // query hooks
  // calculated values
  const nicknameValidation = (nickname: string) => {
    let reg = new RegExp(/^[\wㄱ-ㅎㅏ-ㅣ가-힣]{1,8}$/);
    if (nickname === '') return 'inActive';
    if (nickname.length > 0 && reg.test(nickname)) return 'active';
    if (!reg.test(nickname)) return 'error';
  };
  // effects
  // handlers
  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <FlexBox
      width='320px'
      direction='column'
      alignItems='center'
      position='relative'
      spacing={12}
      css={{ margin: '0 auto' }}
    >
      <FlexBox width='100%' marginTop='20px' height='100px'>
        <FlexBox
          width='100px'
          height='100px'
          css={{
            backgroundColor: characterState.backgroundColor,
            borderRadius: '50%',
            border: '2px solid black',
            overflow: 'hidden',
            justifyContent: 'center',
          }}
        >
          <ImageBox
            backgroundImage={characterState.src}
            width='50%'
            css={{
              height: characterState.height,
              width: characterState.width,
              marginTop: characterState.marginTop,
            }}
          ></ImageBox>
        </FlexBox>
        <FlexBox
          width='204px'
          alignContent='space-between'
          justifyContent='space-between'
          css={{ flexWrap: 'wrap', marginLeft: '16px' }}
        >
          {characters.map((character) => {
            return (
              <FlexBox
                key={character.id}
                width='48px'
                height='48px'
                justifyContent='center'
                alignItems='center'
                onClick={() => setCharacterState(character)}
                css={{
                  border: character.id === characterState.id ? '2px solid #00CA20' : '1px solid black',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: character.backgroundColor,
                  // marginLeft: '5px',
                  cursor: 'pointer',
                  '&:hover': {
                    border: '2px solid #00CA20',
                  },
                }}
              >
                <ImageBox
                  width={character.width}
                  height={character.height}
                  backgroundImage={character.src}
                  css={{ marginTop: character.marginTop }}
                />
              </FlexBox>
            );
          })}
        </FlexBox>
      </FlexBox>
      <FlexBox width='324px' justifyContent='center'>
        <Input
          width='227px'
          message='8자이내, 한글, 영문 숫자 혼용 가능'
          placeholder='닉네임 입력'
          name='nickname'
          value={nickname}
          onChange={onChangeNickname}
          inputStatus={nicknameValidation(nickname)}
        ></Input>
        <RequestButton onClick={() => {}} fontSize='14px' value={nickname} marginLeft='4px' height='50px' width='93px'>
          중복확인
        </RequestButton>
      </FlexBox>
      <Button
        onClick={moveNextStep}
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        width='100%'
        height={48}
        fontSize={20}
        disabled={nickname === '' ? true : false}
        css={{ position: 'absolute', top: '90%' }}
      >
        다음
      </Button>
    </FlexBox>
  );
};

export { SignupStep2 };
