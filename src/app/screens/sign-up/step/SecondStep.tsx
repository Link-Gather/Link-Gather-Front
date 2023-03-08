import React, { ChangeEvent, useState } from 'react';
import { characters } from 'app/screens/data.mock';
import character1 from '@assets/images/icons/character/character1.svg';
import { FlexBox, Input, RequestButton, ImageBox } from '@elements';

interface Props {
  id: number;
  src: string;
  backgroundColor: string;
  width: string;
  height: string;
  marginTop: string;
}

const SecondStep = () => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [characterState, setCharacterState] = useState<Props>(characters[0]);
  const [nickname, setNickname] = useState<string>('');
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const nicknameValidation = (nickname: string) => {
    let reg = new RegExp(/^[\wㄱ-ㅎㅏ-ㅣ가-힣]{1,8}$/);
    if (nickname.length > 0 && !reg.test(nickname)) return 'error';
  };
  return (
    <FlexBox width='100%' height='100%' direction='column' alignItems='center' css={{ gap: '25px' }}>
      <FlexBox width='369px' alignItems='center' marginTop='20px'>
        <FlexBox
          width='150px'
          height='110px'
          css={{
            backgroundColor: characterState.backgroundColor,
            borderRadius: '50%',
            border: '2px solid black',
            overflow: 'hidden',
            marginTop: '5px',
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
        <FlexBox width='369px' justifyContent='end' css={{ flexWrap: 'wrap' }}>
          {characters.map((character) => {
            return (
              <FlexBox
                key={character.id}
                width='60px'
                height='60px'
                justifyContent='center'
                alignItems='center'
                onClick={() => setCharacterState(character)}
                css={{
                  border: character.id === characterState.id ? '2px solid #00CA20' : '1px solid black',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: character.backgroundColor,
                  marginLeft: '5px',
                  marginTop: '5px',
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
      <FlexBox width='100%' marginTop='20px' justifyContent='space-between'>
        <Input
          width='103%'
          label='8자이내, 한글, 영문 숫자 혼용 가능'
          placeholder='닉네임 입력'
          name='nickname'
          value={nickname}
          onChange={onChangeNickname}
          inputType={nicknameValidation(nickname)}
        ></Input>
        <RequestButton onClick={() => {}} value={nickname} css={{ width: '30%' }}>
          중복확인
        </RequestButton>
      </FlexBox>
    </FlexBox>
  );
};

export default SecondStep;
