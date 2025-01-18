import { PropsWithChildren } from "react";

// Should have parameter type for the main
type CustomButtonProps = PropsWithChildren &
  React.HTMLAttributes<HTMLButtonElement>;

// then main
const CustomButton = ({ children, className, ...rest }: CustomButtonProps) => {
  return (
    <button className={`custom-button ` + className} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
