import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ChartPart } from './chart-part';
import { IChartPart } from './chart-part.d';
import { IParticipant } from '../IParticipant';
import { useDashboardContext } from '../../data/dashboard-context';

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function mapToChartParts(participations: IParticipant[]): IChartPart[] {
  const totalInterviews = participations.reduce(
    (partialSum, participant) =>
      partialSum + Number(participant.participationWeight),
    0
  );

  return participations.reduce((res: IChartPart[], currentParticipant) => {
    res.push({
      percentage:
        ((Number(currentParticipant.participationWeight) || 0) * 100) /
        totalInterviews,
      colorIdentifier: currentParticipant.colorIdentifier,
      name: currentParticipant.name,
      offset:
        res.reduce(
          (partialSum: number, chartPart: { percentage: number }) =>
            partialSum + chartPart.percentage,
          0
        ) * 3.6,
    });
    return res;
  }, []);
}
export function Chart({
  colorIdentifier,
  participants,
}: {
  colorIdentifier: string;
  participants: IParticipant[];
}) {
  const [position, setPosition] = useState(1);
  const parts = mapToChartParts(participants.filter((p) => !p.position));
  console.log(parts);
  const [spinParams, setSpinParams] = useState({} as any);
  const { state, setState } = useDashboardContext();
  const getRandomSpin = () => {
    const degrees = getRandomArbitrary(2000, 3000);
    const winner = parts.find((p) => {
      const deg = 360 - (degrees % 360);
      const start = p.offset || 0;
      const end = p.percentage * 3.6 + start;
      return deg >= start && deg < end;
    });
    setTimeout(() => {
      setState(
        state.map((s) => ({
          ...s,
          position: s.name === winner?.name ? position : s.position,
        }))
      );
      setPosition(position + 1);
      setSpinParams({});
    }, 3500);
    return `${degrees}deg`;
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <svg className="arrow" height="20" width="20" viewBox="0 0 30 30">
          <polygon points="0,0 30,0 15,30" fill="black"></polygon>
        </svg>
      </Grid>
      <Grid item>
        <svg
          style={{
            rotate: spinParams.rotate,
            transition: spinParams.transition,
          }}
          height="20"
          width="20"
          viewBox="0 0 20 20"
        >
          <circle r="9.9" cx="10" cy="10" fill={colorIdentifier} />
          <circle r="10" cx="10" cy="10" fill="black" />
          {parts?.map((p) => (
            <ChartPart key={p.name.trim()} {...p} />
          ))}
        </svg>
      </Grid>
      <Grid item>
        <Button
          onClick={() =>
            setSpinParams({
              rotate: getRandomSpin(),
              transition: '3s',
            })
          }
          variant="outlined"
        >
          Spin
        </Button>
      </Grid>
    </Grid>
  );
}
