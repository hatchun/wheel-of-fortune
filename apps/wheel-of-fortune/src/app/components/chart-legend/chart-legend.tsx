import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { IParticipant } from '../IParticipant';

export function ChartLegend({
  participants,
}: {
  participants: IParticipant[];
}) {
  return (
    <Grid container className="legend" justifyContent="start" spacing={2}>
      
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Paper>
              <Grid item>
                <h2>Participants</h2>
              </Grid>
              {participants
                .filter((p) => !p.position)
                .map((p) => (
                  <Grid item className="participantRow">
                    <div
                      style={{
                        backgroundColor: p.bgColor,
                      }}
                    ></div>
                    <span>{p.name}</span>
                  </Grid>
                ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Paper>
            <Grid item>
              <h2>Winners</h2>
            </Grid>
            {participants
              .filter((p) => p.position)
              .sort((a, b) => (a.position || 0) - (b.position || 0))
              .map((p) => (
                <Grid item className="winnerCell">
                  <span>{p.position}: </span>
                  <span>{p.name}</span>
                </Grid>
              ))}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
