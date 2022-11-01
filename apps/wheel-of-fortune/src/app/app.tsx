// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Dashboard } from './components/dashboard/dashboard';
import { DashboardContextProvider } from './data/dashboard-context';

export function App() {
  return (
    <DashboardContextProvider>
      <Dashboard />
      <div />
    </DashboardContextProvider>
  );
}

export default App;
