import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { paths, homePaths, safeStars } from "./const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(() => {
  const boxSize = 100 / 15 + "%";

  return {
    root: {
      width: "700px",
      height: "700px",
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap",
      margin: "auto",
    },
    box: {
      boxSizing: "border-box",
      textAlign: "center",
      background: "grey",
      border: "1px solid black",
      width: boxSize,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      flexWrap: "wrap",
    },
    yardRed: {
      background: "red",
      border: 0,
    },
    yardGreen: {
      background: "green",
      border: 0,
    },
    yardBlue: {
      background: "blue",
      border: 0,
    },
    yardYellow: {
      background: "yellow",
      border: 0,
    },
    home: {
      background: "white",
      border: 0,
    },
    homeRedGreen: {
      background: "linear-gradient(to bottom left,green 50%,red 50%)",
    },
    homeGreenYellow: {
      background: "linear-gradient(to bottom right,green 50%,yellow 50%)",
    },
    homeYellowBlue: {
      background: "linear-gradient(to top right,blue 50%,yellow 50%)",
    },
    homeBlueRed: {
      background: "linear-gradient(to top left,blue 50%,red 50%)",
    },
    homeColorAll: {
      background: 'url("image/home.png") no-repeat center',
    },
    path: {
      background: "white",
    },
    safePathRed: {
      background: "red",
    },
    safePathGreen: {
      background: "green",
    },
    safePathBlue: {
      background: "blue",
    },
    safePathYellow: {
      background: "yellow",
    },
    safeStars: {
      background: 'url("image/star.png") no-repeat center',
    },
  };
});

const boxes = [];
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
    boxes.push([i, j]);
  }
}

const fx = (row, col, minRow, maxRow, minCol, maxCol) => {
  return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;
};

const Box = ({ row, col, index }) => {
  const classes = useStyles();
  return (
    <span
      className={clsx(classes.box, {
        [classes.yardRed]: fx(row, col, 0, 5, 0, 5),
        [classes.yardGreen]: fx(row, col, 0, 5, 9, 15),
        [classes.yardBlue]: fx(row, col, 9, 15, 0, 5),
        [classes.yardYellow]: fx(row, col, 9, 15, 9, 15),
        [classes.home]: fx(row, col, 6, 8, 6, 8),
        [classes.path]: paths.includes(index),
        [classes.safePathRed]: homePaths.red.includes(index),
        [classes.safePathGreen]: homePaths.green.includes(index),
        [classes.safePathBlue]: homePaths.blue.includes(index),
        [classes.safePathYellow]: homePaths.yellow.includes(index),

        [classes.homeRedGreen]: homePaths.redGreen.includes(index),
        [classes.homeGreenYellow]: homePaths.greenYellow.includes(index),
        [classes.homeYellowBlue]: homePaths.yellowBlue.includes(index),
        [classes.homeBlueRed]: homePaths.blueRed.includes(index),
        [classes.homeColorAll]: homePaths.allColor.includes(index),

        [classes.safeStars]: safeStars.includes(index),
      })}
    >
      {/* {index} */}
      {/* <FontAwesomeIcon icon={faCircle} /> */}
    </span>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {boxes.map((box, index) => {
        return <Box key={index} row={box[0]} col={box[1]} index={index} />;
      })}
    </div>
  );
};

export default App;
