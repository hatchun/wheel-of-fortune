import { Grid } from '@mui/material';
import { Chart } from '../chart/chart';
import { useDashboardContext } from '../../data/dashboard-context';
import { ChartLegend } from '../chart-legend/chart-legend';
import { InputLoader } from '../input-loader/input-loader';
import { useState } from 'react';
import { IParticipant } from '../IParticipant';

export function Dashboard() {
  const { state, setState } = useDashboardContext();
  const [ action, setAction ] = useState('Load your participants list!')

  const onInputLoadedHandler = (participants: IParticipant[]) => {
    setState(participants);
    setAction('Spin the wheel to select your winners!')
  }

  return (
    <>
      <div id="welcome">
        <h1>Welcome to the wheel of fortune. <br /><span>{action}</span></h1>
      </div>
      {state?.length > 3 && (
        <Grid container className="dashboard">
          <Grid item xs={4}>
            <Chart colorIdentifier="bisque" participants={state} />
          </Grid>
          <Grid item xs={4}>
            <ChartLegend participants={state} />
          </Grid>
        </Grid>
      )}
      {!(state?.length > 3) && (
        <Grid container className="dashboard">
          <Grid item flexGrow="1">
            <InputLoader onInputLoaded={onInputLoadedHandler} />
          </Grid>
        </Grid>
      )}
    </>
  );
}
