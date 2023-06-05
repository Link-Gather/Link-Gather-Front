import { useStacks } from '@libs/stacks';
import { Input, StackChip } from '@elements';
import { Grid, Stack as MuiStack } from '@mui/material';
import { Theme } from '@libs/theme';
import { InputHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';
import { Stack } from '@models';
import SearchIcon from '@assets/images/icons/icon-search.svg';

/**
 * TODO: 최적화해야한다.
 */
function sortSearchStack(stacks: Stack[], search: string, type: 'project' | 'signup'): Array<Stack> {
  const filteredStacks = stacks
    .filter((stack) => stack.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    .sort((a, b) => a.name.indexOf(search) - b.name.indexOf(search));
  const max = type === 'project' ? 12 : 5;
  const sortedStacks = [];
  let queue: Stack[] = [];
  while (filteredStacks.length) {
    const hasOne = filteredStacks.some((stack) => Stack.getLength(stack.name) === 1);
    //NOTE: 5가 총길이면 스택 길이가 모두 같을때 넣어준다.
    if (max === 5 && !hasOne && new Set(filteredStacks.map((stack) => Stack.getLength(stack.name))).size === 1) {
      sortedStacks.push(filteredStacks);
      break;
    }

    //NOTE: 12가 총길이면 스택 길이 1이 없을때 길이순으로 넣어준다.
    if (max !== 5 && !hasOne) {
      const lastStacks = filteredStacks.sort((a, b) => Stack.getLength(b.name) - Stack.getLength(a.name));
      sortedStacks.push(lastStacks);
      break;
    }

    const stack = filteredStacks.pop();
    const queueLength = queue.reduce((acc, cur) => acc + Stack.getLength(cur.name), 0);
    if (queueLength + Stack.getLength(stack!.name) <= max) {
      queue.push(stack!);
    } else if (!hasOne && queueLength === max - 1) {
      filteredStacks.unshift(stack!, queue.pop()!);
    } else if (queueLength + Stack.getLength(stack!.name) > max) {
      filteredStacks.unshift(stack!);
    }
    if (queueLength === max || !filteredStacks.length) {
      sortedStacks.push(queue);
      queue = [];
    }
  }

  return sortedStacks.flat();
}

function SearchStackInput(
  props: {
    label?: string;
    required?: boolean;
    type: 'project' | 'signup';
    value?: Stack[];
    onAdd: (stack: Stack) => void;
    onChange?: () => void;
    className?: string;
  } & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'label' | 'required' | 'onAdd' | 'onChange' | 'className'>
) {
  // prop destruction
  const { label, required, type, onAdd, value, onChange, className, ...rest } = props;
  // lib hooks
  const stacks = useStacks();
  // state, ref hooks
  const [search, setSearch] = useState('');
  const [isHide, setIsHide] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [selectedStackIds] = useState<Set<number>>(new Set(value?.map((stack) => stack.id)));
  // query hooks
  // calculated values
  const searchedStacks = useMemo(
    () =>
      sortSearchStack(
        stacks.filter((stack) => !selectedStackIds.has(stack.id)),
        search,
        type
      ),
    [stacks, search, type, selectedStackIds]
  );
  // effects
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsHide(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // handlers
  return (
    <MuiStack spacing={2}>
      <MuiStack css={{ position: 'relative', maxWidth: '896px' }} className={className}>
        <Input
          {...rest}
          variant='underline'
          required={required}
          label={label}
          type='text'
          placeholder={rest.placeholder || '기술 스택 검색'}
          css={{ fontSize: '14px', height: '40px', background: 'inherit' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsHide(false)}
          IconProps={{
            StartIcon: <SearchIcon css={{ width: '24px' }} />,
          }}
        />
        {search && !isHide && (
          <MuiStack
            ref={ref}
            css={(theme: Theme) => ({
              width: '100%',
              minHeight: '68px',
              maxHeight: '98px',
              border: `1px solid ${theme.palette.black.main}`,
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: theme.palette.paper,
              borderRadius: '8px',
              boxShadow: `4px 4px 0px ${theme.palette.black.main}`,
              zIndex: '2',
              display: 'flex',
              padding: '4px',
              overflow: 'auto',
            })}
          >
            {!searchedStacks.length ? (
              <p>해당하는 스킬이 없습니다.</p>
            ) : (
              <Grid container rowSpacing='8px'>
                {searchedStacks.map((stack) => (
                  <Grid key={stack.id} item md={(Stack.getLength(stack.name) * 12) / (type === 'project' ? 12 : 5)}>
                    <StackChip
                      name={stack.name}
                      length={Stack.getLength(stack.name)}
                      onClick={() => {
                        onAdd(stack);
                        setSearch('');
                        setIsHide(true);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </MuiStack>
        )}
      </MuiStack>
      {/* NOTE: select value는 number배열을 받지 못한다. */}
      <select hidden multiple value={value?.map((value) => String(value))} onChange={onChange} />
    </MuiStack>
  );
}

export { SearchStackInput };
