import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => {
  const boxSize = 100 / 15 + "%";

  return {
    root: {
      width: "700px",
      height: "700px",
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap",
    },
    box: {
      boxSizing: "border-box",
      textAlign: "center",
      background: "grey",
      display: "inline-block",
      border: "1px solid black",
      width: boxSize,
      fontSize: "14px",
    },
    yardRed: {
      background: "red",
    },
    yardGreen: {
      background: "green",
    },
    yardBlue: {
      background: "blue",
    },
    yardYellow: {
      background: "yellow",
    },
    home: {
      background: "purple",
    },
    path: {
      background: "white",
    },
  };
});

const boxes = [];
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
    boxes.push([i, j]);
  }
}

const paths = [
  90,
  91,
  92,
  93,
  94,
  95,
  81,
  66,
  51,
  36,
  21,
  6,
  7,
  8,
  23,
  38,
  53,
  68,
  83,
  99,
  100,
  101,
  102,
  103,
  104,
  119,
  134,
  133,
  132,
  131,
  130,
  129,
  143,
  158,
  173,
  188,
  203,
  218,
  217,
  216,
  201,
  186,
  171,
  156,
  141,
  125,
  124,
  123,
  122,
  121,
  120,
  105,
];

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
      })}
    >
      {index}
    </span>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {boxes.map((box, i) => {
        return <Box row={box[0]} col={box[1]} index={i} />;
      })}
    </div>
  );
};

export default App;
