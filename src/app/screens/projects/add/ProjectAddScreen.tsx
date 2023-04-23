import { FlexBox, Input, TextArea, Typography, Slider, Section } from '@elements';
import { Radio, TeamCompositionSection } from '@components';

function ProjectAddScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <Section css={{ maxWidth: '896px', width: '100%' }}>
      <FlexBox direction='column' spacing={10}>
        <Typography variant='h3'>프로젝트 생성</Typography>
        <FlexBox direction='column' spacing={9}>
          <Radio
            label='프로젝트 목적'
            required
            options={[
              { label: '역량 강화/포트폴리오', value: 'portfolio' },
              { label: '수입 창출/사업', value: 'business' },
              { label: '재미', value: 'fun' },
              { label: '스터디', value: 'study' },
            ]}
            optionProps={{ spacing: 9 }}
          />
          <Input label='프로젝트 제목' required placeholder='인적 기술적 자원의 공유 커뮤니티' />
          <TextArea
            css={{
              height: '288px',
              '&::placeholder': {
                fontSize: '16px',
                lineHeight: '32px',
              },
            }}
            label='프로젝트 설명'
            required
            placeholder={`· 동기 및 타겟층 
  프로젝트를 기획한 배경을 작성해 주세요. 어떤 사용자를 타겟하고 있는지, 기획한 서비스만의 차별점 및 
  매력은 무엇인지 설명해주세요! 
· 진행 방식 
  회의와 모임 장소 및 주기, 협업 방식에 대해 설명해주세요. 
· 달성하고 싶은 목표 
  프로젝트를 통해 달성하고 싶은 목표와 마일스톤 및 일정이 있다면 설명해주세요. 팀원들과 함께 만들어가
  고 싶다면 해당 내용을 작성해주세요.`}
          />
          <Slider
            label='에상 기간'
            required
            min={1}
            max={12}
            step={1}
            defaultValue={5}
            marks={[
              '1개월 이하',
              '2개월',
              '3개월',
              '4개월',
              '5개월',
              '6개월',
              '7개월',
              '8개월',
              '9개월',
              '10개월',
              '11개월',
              '1년',
            ]}
          />
          <TeamCompositionSection required />
        </FlexBox>
      </FlexBox>
    </Section>
  );
}

export { ProjectAddScreen };
