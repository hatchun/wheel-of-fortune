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
