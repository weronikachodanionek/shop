import { Button, withStyles } from "@material-ui/core";

const UnavailableProductButton = withStyles({
  root: {
    background: "#c0c0c0",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 28,
    width: 28,
    minWidth: 28,
    boxShadow: "0px 0px 40px -5px rgba(0,0,0,0.23);",
    marginRight: "20px",
  },
})(Button);

export default UnavailableProductButton;
