import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { IParticipant } from '../components/IParticipant';
// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultState: {
  state: IParticipant[];
  setState: Dispatch<SetStateAction<IParticipant[]>>;
} = undefined as unknown as {
  state: IParticipant[];
  setState: Dispatch<SetStateAction<IParticipant[]>>;
};
const DashboardContext = React.createContext(defaultState);

export const DashboardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState([] as IParticipant[]);
  return (
    <DashboardContext.Provider value={{ state, setState }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const { state, setState } = useContext(DashboardContext);
  return { state, setState };
};
