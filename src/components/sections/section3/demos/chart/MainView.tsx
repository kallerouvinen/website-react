import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Goal from "../basic/Goal";
import MainViewExpensesChart from "./MainViewExpensesChart";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    background: "linear-gradient(#fff, #f2f2f2 5%, #f2f2f2 5%, #fff)",
    padding: 24,
  },
});

interface Props {
  data: any;
}

function MainView(props: Props) {
  const classes = useStyles();
  const { expenses, savings } = props.data;

  return (
    <div className={classes.root}>
      <Grid alignItems="flex-start" container spacing={3}>
        <Grid container direction="row" item xs={6} spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>Expenses</Typography>
                  <MainViewExpensesChart data={expenses} />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography>Saving Goals</Typography>
                {savings.map((goal: any) => (
                  <Goal
                    icon={goal.icon}
                    label={goal.name}
                    goal={goal.goal}
                    current={goal.current}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" item xs={6} spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography>Activity Feed</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography>Card 4</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <div></div>
    </div>
  );
}

export default MainView;
