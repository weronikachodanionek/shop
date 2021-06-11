import { Button, withStyles } from "@material-ui/core";

const DetailsButton = withStyles({
  root: {
    background: "rgb(252, 124, 65)",
    borderRadius: 50,
    fontFamily: "Noto Sans",
    fontSize: "13px",
    color: "white",
    padding: "5px 15px",
    border: 0,
    boxShadow: "0px 0px 40px -5px rgba(0,0,0,0.23);",
    "&:hover": {
      backgroundColor: "rgba(255, 175, 138, 0.961)",
      color: "rgb(20, 20, 20)",
    },
  },
})(Button);

export default DetailsButton;
