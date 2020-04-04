import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CodeEditor from "./CodeEditor";
import Monitor from "./Monitor";
import MusicPlayer from "./MusicPlayer";
import Window from "./Window";

const useStyles = makeStyles({
  root: {
    margin: 20,
    padding: 50,
    backgroundColor: "moccasin",
  },
  skew: {
    transform: "skew(0deg, 0deg)",
  },
});

function PureCSS() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.skew}>
        <Monitor>
          <Window>
            <CodeEditor />
          </Window>
          <Window>
            <MusicPlayer />
          </Window>
        </Monitor>
      </div>
    </div>
  );
}

export default PureCSS;
