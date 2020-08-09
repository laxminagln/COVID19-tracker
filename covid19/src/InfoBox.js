import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({title, cases, active, total, ...props}) {
  return(
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'}`}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox_cases">{cases}</h2>
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}
export default InfoBox;
