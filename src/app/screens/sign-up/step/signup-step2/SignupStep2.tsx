import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { characters } from '@screens';
import { useForm } from 'react-hook-form';
import { VALIDATION_PATTERN } from '@libs/constants';
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
  // form hooks
  const schema = yup.object().shape({
    nickname: yup.string().matches(VALIDATION_PATTERN.nickname),
  });

  const {
    register,
    getValues,
    formState: { errors, dirtyFields, isValid },
  } = useForm<{ nickname: string }>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      nickname: '',
    },
  });
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox width='320px' direction='column' alignItems='center' spacing={12} css={{ margin: '0 auto' }}>
      <FlexBox width='100%' height='100px' css={{ marginTop: '20px' }}>
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
            imageSrc={characterState.src}
            width='50%'
            alt='selectCharacter'
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
                  cursor: 'pointer',
                  '&:hover': {
                    border: '2px solid #00CA20',
                  },
                }}
              >
                <ImageBox
                  alt='character'
                  width={character.width}
                  height={character.height}
                  imageSrc={character.src}
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
          inputStatus={!dirtyFields.nickname ? 'inActive' : errors.nickname ? 'error' : 'active'}
          {...register('nickname')}
        ></Input>
        <RequestButton
          onClick={() => {}}
          fontSize='14px'
          value={getValues('nickname')}
          marginLeft='4px'
          height='50px'
          width='93px'
        >
          중복확인
        </RequestButton>
      </FlexBox>
      <Button
        onClick={moveNextStep}
        css={{
          color: palette.contrastText,
          position: 'absolute',
          bottom: '40px',
          borderRadius: '32px',
          backgroundColor: palette.primary.main,
          width: '320px',
          height: '48px',
          fontSize: '20px',
          fontWeight: '600',
          letterSpacing: '0.6px',
        }}
      >
        다음
      </Button>
    </FlexBox>
  );
};

export { SignupStep2 };
