import '../styles/button.css';

const Button = ({children, handleClick,classButton}) =>  (
  <button className={classButton} onClick={handleClick}>{children}</button>
  )

export default Button;
