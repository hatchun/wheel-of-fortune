import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { Chart } from '../chart/chart';
import { useDashboardContext } from '../../data/dashboard-context';
import { IParticipant } from '../IParticipant';
import { ChartLegend } from '../chart-legend/chart-legend';


export function Dashboard() {
  const { state, setState } = useDashboardContext();
  const participants: IParticipant[] = [
    {
      name: 'Assen Garbev',
      bgColor: 'blue',
      interviewCount: 2,
    },
    {
      name: 'J.N. Thomas',
      bgColor: 'red',
      interviewCount: 1,
    },
    {
      name: 'Gabriel Desjardins',
      bgColor: 'orange',
      interviewCount: 5,
    },
    {
      name: 'Andre Asano',
      bgColor: 'purple',
      interviewCount: 3,
    },
    {
      name: 'Sergio Romero',
      bgColor: 'green',
      interviewCount: 1,
    },
  ];
  
  useEffect(() => {
    setState((participants));
  }, []);
  return (
    <Grid container className='dashboard'>
      <Grid item xs={4}>
        <Chart bgColor="bisque" participants={state} />
      </Grid>
      <Grid item xs={4}>
        <ChartLegend participants={state} />
      </Grid>
    </Grid>
  );
}
