import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import TradeTabs from "./TradeTabs";

import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: 16,
  },
  buy: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sell: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const styles = {
  swipeableViews: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
};

interface Props extends ResponsiveWrapperProps {}

function Trade(props: Props) {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(0);
  const [buyAmount, setBuyAmount] = React.useState("");
  const [sellAmount, setSellAmount] = React.useState("");

  const { size } = props;

  const handleBuyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setBuyAmount(value);
  };

  const handleSellChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setSellAmount(value);
  };

  return (
    <div className={classes.root}>
      <TradeTabs onChange={setSelected} value={selected} />
      <SwipeableViews
        style={styles.swipeableViews}
        containerStyle={styles.container}
        index={selected}
      >
        <div className={classes.buy}>
          {/* <TextField
            label="Amount"
            onChange={handleBuyChange}
            value={buyAmount}
          />
          <Button>Buy</Button> */}
        </div>
        <div className={classes.sell}>
          {/* <TextField
            label="Amount"
            onChange={handleSellChange}
            value={sellAmount}
          />
          <Button>Sell</Button> */}
        </div>
      </SwipeableViews>
    </div>
  );
}

export default Trade;
