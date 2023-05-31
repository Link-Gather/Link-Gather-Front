import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Stack } from '@models';
import { httpClient } from '@libs/http-client';

const stackRepository = {
  async list() {
    return httpClient.get<Stack[]>('/stacks');
  },
};

const StackContext = createContext<{ getStacks(): Stack[] | undefined; setStacks(stacks?: Stack[]): void }>({
  getStacks() {
    return undefined;
  },
  setStacks() {},
});

function StackProvider(props: { children?: ReactNode }) {
  // prop destruction
  const { children } = props;

  // lib hooks
  // state, ref, querystring hooks
  const [stacks, setStacks] = useState<Stack[]>();
  const [initialized, setInitialized] = useState(false);

  // form hooks
  // query hooks
  // calculated values
  const contextValue = useMemo(() => {
    return {
      getStacks() {
        return stacks;
      },
      setStacks,
    };
  }, [stacks]);

  // effects
  useEffect(() => {
    if (initialized) {
      return;
    }

    stackRepository
      .list()
      .then((data) => {
        setStacks(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setInitialized(true);
      });
  }, [initialized]);

  // handlers

  if (!initialized) {
    return null;
  }
  return <StackContext.Provider value={contextValue}>{children}</StackContext.Provider>;
}

const useStacks: () => Stack[] = () => {
  const { getStacks } = useContext(StackContext);
  const stacks = getStacks();

  if (!stacks?.length) {
    throw new Error('Not initialized');
  }

  return stacks;
};

export { StackProvider, useStacks };
