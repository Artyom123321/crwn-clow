import { BaseButton, GoogleSignIn, invertedStyle } from "./button.style.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: invertedStyle,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CastomButton = getButton(buttonType);
  return <CastomButton {...otherProps}>{children}</CastomButton>;
};
export default Button;
