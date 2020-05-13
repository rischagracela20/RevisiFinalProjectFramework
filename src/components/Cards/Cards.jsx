import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
  if (!confirmed) {
    return 'Loading. Please wait...';
  }

  return (
    <div className={styles.container}>
      <br />
      <h2><font size = '5'>{country ? `COUNTRIES: ${country}` : `GLOBAL`}</font></h2>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <center>
            <Typography color="textSecondary" gutterBottom>
              <b>POSITIVE</b>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            </center>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <center>
            <Typography color="textSecondary" gutterBottom>
             <b>RECOVERED</b>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            </center>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <center>
            <Typography color="textSecondary" gutterBottom>
              <b>DEATHS</b>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            </center>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;