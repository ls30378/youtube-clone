import "./sidenavsection.scss";
import SignInButton from "../signinbtn/signinbtn";
const SideNavSection = ({ sections, ...others }) => {
  const [...section] = sections;
  return others.ad ? (
    <section className="navSection__ad">
      <p>Sign in to like videos, comment, and subscribe</p>
      <SignInButton />
    </section>
  ) : (
    <section>
      <ul>
        {section.map((s) => (
          <li key={s}>
            <a href={s}>{s}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SideNavSection;
