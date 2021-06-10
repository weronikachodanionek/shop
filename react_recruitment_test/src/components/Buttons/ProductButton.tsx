import { Button, withStyles } from "@material-ui/core";

const ProductButton = withStyles({
  root: {
    background: "rgb(252, 124, 65)",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 28,
    width: 28,
    minWidth: 28,
    boxShadow: "0px 0px 40px -5px rgba(0,0,0,0.23);",
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "rgba(255, 175, 138, 0.961)",
      color: "rgb(20, 20, 20)",
    },
  },
})(Button);

export default ProductButton;
