import { Wrapper } from "../assets/consts";
import Rocket from "../assets/Rocket";

function Header() {
  return (
    <Wrapper>
      <div className="header">
        <div className="title-wrapper">
          <Rocket />
          <h1>
            <span>to</span>
            <span className="do">do</span>
          </h1>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
