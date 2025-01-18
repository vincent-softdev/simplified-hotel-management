import CustomButton from "../../components/CustomButton";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="header-bar__icon">
        <CustomButton className="header-bar__btn">
          <p>SHM</p>
        </CustomButton>
      </div>
      <div className="header-bar__menu">
        <CustomButton className="header-bar__btn">
          <p>AUD</p>
        </CustomButton>
      </div>
    </div>
  );
};

export default HeaderBar;
