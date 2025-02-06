import { socialLinks } from "../../config/link.config";

const FooterSocialLinks = () => {
  return (
    <ul className="flex flex-col gap-4 text-sm md:flex-row">
      {socialLinks.map(({ label, link }) => (
        <li
          key={label}
          className="duration-300 hover:cursor-pointer hover:text-yellow"
        >
          <a href={link} target="_blank" aria-label={`Visit our ${label}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialLinks;
