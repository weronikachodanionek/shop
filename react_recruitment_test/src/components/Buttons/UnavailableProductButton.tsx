import { Button, withStyles } from "@material-ui/core";

const UnavailableProductButton = withStyles({
  root: {
    background: "rgb(192, 192, 192)",
    borderRadius: 50,
    border: 0,
    color: "rgb(20, 20, 20)",
    height: 28,
    width: 28,
    minWidth: 28,
    boxShadow: "0px 0px 40px -5px rgba(0,0,0,0.23);",
    marginRight: "20px",
  },
})(Button);

export default UnavailableProductButton;
