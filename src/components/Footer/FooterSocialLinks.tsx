const FooterSocialLinks = () => {
  const socialLinks = [
    { label: "INSTAGRAM", link: import.meta.env.VITE_THEM_INSTAGRAM },
    { label: "BEHANCE", link: import.meta.env.VITE_THEM_BEHANCE },
    { label: "TELEGRAM", link: import.meta.env.VITE_THEM_TELEGRAM },
    { label: "WHATSAPP", link: import.meta.env.VITE_THEM_WHATSAPP },
  ];

  return (
    <ul className="flex flex-col gap-4 text-sm md:flex-row">
      {socialLinks.map(({ label, link }) => (
        <li>
          <a href={link} target="_blank" aria-label={`Visit our ${label}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialLinks;
