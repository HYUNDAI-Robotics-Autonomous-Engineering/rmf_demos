import * as React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Progress } from 'antd';
import { useRobotCardStyles } from '../styles';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import Dock from '@material-ui/icons/Dock';

interface RobotCardProps {
  robotState: {
    robot_name: string;
    fleet_name: string;
    assignments: string;
    mode: string;
    battery_percent: string;
    level_name: string;
  };
}

export const RobotCard = (props: RobotCardProps) : React.ReactElement => {
    const { robotState } = props
    let battery: number = parseFloat(parseFloat(robotState.battery_percent).toFixed(2));
    const classes = useRobotCardStyles();

    const returnStatusIcon = (mode: string) => {
      switch(mode) {
        case "Charging-1":
          return <BatteryChargingFullIcon />
        case "Dock/Clean-7":
          return <Dock />
      }
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.text}>
                      {robotState.robot_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="textSecondary" className={classes.text}>
                      {robotState.fleet_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Task ID
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>{robotState.assignments}</Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Status
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>{robotState.mode}</Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Battery
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Progress percent={battery} size="small" width={50}/>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" color="textSecondary">
                      Location
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>{robotState.level_name}</Grid>
                  <Grid item container direction="column" alignItems="flex-end" justify="flex-end">{returnStatusIcon(robotState.mode)}</Grid>
              </Grid>
            </CardContent>
        </Card>
    );                                                                
}
