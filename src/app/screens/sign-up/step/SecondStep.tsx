import React from 'react';
import { characters } from 'app/screens/data.mock';
import { FlexBox, Input, RequestButton, ImageBox } from '@elements';

const SecondStep = () => {
  return (
    <FlexBox width='369px' height='100%' direction='column' alignItems='center' css={{ gap: '25px' }}>
      <FlexBox width='369px' alignItems='center' marginTop='20px'>
        <FlexBox
          width='150px'
          height='110px'
          css={{
            backgroundColor: characters[2].backgroundColor,
            borderRadius: '50%',
            border: '2px solid black',
            overflow: 'hidden',
            marginTop: '5px',
          }}
        >
          <ImageBox
            backgroundImage={characters[2].src}
            width='80%'
            css={{
              margin: '0 auto',
              marginTop: '25px',
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
                css={{
                  border: '2px solid black',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: character.backgroundColor,
                  marginLeft: '5px',
                  marginTop: '5px',
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
      <FlexBox width='80%' marginTop='30px' justifyContent='center' alignItems='center'>
        <Input width='100%' label='8자이내, 한글, 영문 숫자 혼용 가능' placeholder='닉네임 입력'></Input>
        <RequestButton onClick={() => {}} css={{ width: '40%', fontSize: '13px' }}>
          중복확인
        </RequestButton>
      </FlexBox>
    </FlexBox>
  );
};

export default SecondStep;
