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
      backgroundColor: "rgb(224, 200, 190)",
      color: "rgb(19, 18, 18)",
    },
  },
})(Button);

export default ProductButton;
