import "./sidenavsection.scss";
import SignInButton from "../signinbtn/signinbtn";
const SideNavSection = ({ sections, ...others }) => {
  const [...section] = sections;
  let icons = [];
  section.forEach((el) => {
    switch (el) {
      case "home":
        icons.push("house");
        break;
      case "explore":
        icons.push("compass");
        break;
      case "shorts":
        icons.push("play");
        break;
      case "subscriptions":
        icons.push("clapperboard");
        break;
      case "library":
        icons.push("compact-disc");
        break;
      case "history":
        icons.push("clock-rotate-left");
        break;
      default:
        break;
    }
  });
  return others.ad ? (
    <section className="navSection__ad">
      <p>Sign in to like videos, comment, and subscribe</p>
      <SignInButton />
    </section>
  ) : (
    <section>
      <ul>
        {section.map((s, i) => (
          <li key={s}>
            <i className={`fa-solid fa-${icons[i]}`}></i>
            <a href={s}>{s}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SideNavSection;
