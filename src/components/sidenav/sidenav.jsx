import "./sidenav.scss";
import Brand from "../brand/brand";
import SideNavSection from "../sideNavSection/sidenavsection";
const SideNav = ({ isActive, setActive }) => {
  return (
    <div
      tabIndex="1"
      onClick={(event) =>
        !event.target.classList.contains("sideNav__container")
          ? setActive(false)
          : ""
      }
      onKeyDown={(event) => (event.code === "Escape" ? setActive(false) : "")}
      className={`sideNav ${isActive ? "active" : ""}`}
    >
      <div className="sideNav__container">
        <Brand />
        <SideNavSection
          sections={["home", "explore", "shorts", "subscriptions"]}
        />
        <SideNavSection sections={["library", "history"]} />
        <SideNavSection sections={[]} ad />
      </div>
    </div>
  );
};

export default SideNav;
