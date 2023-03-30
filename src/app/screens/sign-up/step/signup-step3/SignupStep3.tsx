import { FlexBox, CategoryTitle, Button, ImageBox, Input, SkillTab } from '@elements';
import IconSearch from '@assets/images/icons/icon-search.svg';
import { DropDown, SkillDropdown } from '@components';
import palette from '@libs/theme/palettes';
import { skills } from 'app/screens/data.mock';
import { KeyboardEvent, ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

const SignupStep3 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [searchSkill, setSearchSkill] = useState<string>('');
  const [urlString, setUrlString] = useState<string>('');
  const [selectSkill, setSelectSkill] = useState<string[]>([]);
  const [urlArray, setUrlArray] = useState<string[]>([]);
  // form hooks
  // query hooks
  // calculated values
  const jobData = ['프론트엔드', '백엔드', '디자이너', '기획자'];
  const experienceData = ['학생/취준생', '1~3년차', '3~5년차', '5~10년차', '10년차이상'];
  // effects
  // handlers
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchSkill(e.target.value);
  };

  const onChangeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    setUrlString(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setUrlArray([...urlArray, urlString]);
      setUrlString('');
    }
  };

  const onDeleteUrl = (url: string) => {
    setUrlArray(urlArray?.filter((urlName) => urlName !== url));
  };

  return (
    <FlexBox width='100%' direction='column' alignItems='center' css={{ gap: '25px' }}>
      <FlexBox width='100%' justifyContent='space-between' css={{ marginTop: '25px' }}>
        <FlexBox width='212px' direction='column'>
          <CategoryTitle label='직무*' />
          <DropDown value='기획자' data={jobData}></DropDown>
        </FlexBox>
        <FlexBox width='168px' direction='column'>
          <CategoryTitle label='경력*' />
          <DropDown value='1~3년차' data={experienceData}></DropDown>
        </FlexBox>
      </FlexBox>
      <FlexBox width='100%' direction='column' css={{ position: 'relative' }}>
        <CategoryTitle label='보유기술*' />
        <BottomLineInput
          name='searchSkill'
          type='text'
          value={searchSkill}
          onChange={onChange}
          placeholder='기술 스택 검색'
          css={{ padding: '10px 40px 0px 40px' }}
        ></BottomLineInput>
        <ImageBox
          alt={'search'}
          imageSrc={IconSearch}
          position='absolute'
          width='25px'
          css={{ marginTop: '37px', marginLeft: '5px' }}
        ></ImageBox>
        <FlexBox
          css={{
            flexWrap: 'wrap',
            maxHeight: '30px',
            overflowY: 'auto',
          }}
        >
          {selectSkill.length !== 0 &&
            selectSkill.map((skill) => (
              <SkillTab
                css={{
                  width: skill.length < 7 ? '64px' : skill.length < 14 ? '136px' : '208px',
                }}
                key={skill}
              >
                {skill}
              </SkillTab>
            ))}
        </FlexBox>
        {searchSkill ? (
          <SkillDropdown
            searchSkill={searchSkill}
            selectSkill={selectSkill}
            setSelectSkill={setSelectSkill}
            setSearchSkill={setSearchSkill}
            skills={skills}
          />
        ) : null}
      </FlexBox>
      <FlexBox width='100%' direction='column'>
        <CategoryTitle label='자기소개 *' />
        <textarea
          css={{
            marginTop: '8px',
            width: '100%',
            height: '98px',
            fontWeight: '500',
            fontSize: '14px',
            borderRadius: 8,
            border: `2px solid ${palette.secondary.n300}`,
            padding: '8px 24px 8px 8px',
            outline: 'none',
            resize: 'none',
          }}
        ></textarea>
      </FlexBox>
      <FlexBox width='100%' direction='column'>
        <CategoryTitle label='참고 링크' />
        <BottomLineInput
          onKeyDown={onKeyDown}
          placeholder='URL을 입력해주세요.'
          type='text'
          name='urlString'
          onChange={onChangeUrl}
          value={urlString}
        />
        {urlArray.map((url) => (
          <FlexBox css={{ padding: '5px' }}>
            <a
              css={{
                color: palette.primary.main,
                textDecoration: 'underline',
                fontWeight: '500',
                display: 'inline-block',
              }}
              key={url}
              href={url}
              target='_blank'
              rel='noreferrer'
            >
              {url}
            </a>
            <button
              css={{
                width: '20px',
                height: '20px',
                marginLeft: '20px',
                backgroundColor: palette.secondary.n90,
                borderRadius: '20px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: palette.primary.main,
                },
              }}
              onClick={() => {
                onDeleteUrl(url);
              }}
            >
              x
            </button>
          </FlexBox>
        ))}
      </FlexBox>
      <Button
        onClick={moveNextStep}
        color={palette.contrastText}
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
        회원가입
      </Button>
    </FlexBox>
  );
};

export { SignupStep3 };

const BottomLineInput = styled('input')({
  border: 'none',
  borderBottom: `2px solid ${palette.secondary.n60}`,
  height: '50px',
  padding: '10px 40px 0px 0px',
  fontSize: '18px',
  '&:focus': {
    outline: 'none',
    borderBottom: `2px solid ${palette.primary.main}`,
  },
  '::placeholder': {
    color: palette.secondary.n60,
    fontWeight: '600',
  },
});
