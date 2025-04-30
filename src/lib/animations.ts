//MAIN PAGE ANIMATIONS
export const descriptionAnimation = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.35 },
};

export const sectionLinkToAllProjectsAnimation = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.35 },
};

export const projectLineAnimation = (index: number) => ({
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.35 },
  style: {
    transformOrigin:
      window.innerWidth < 768 ? "left" : index % 2 === 0 ? "left" : "right",
  },
});

export const projectDescriptionAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.35 },
};

//FOOTER ANIMATION
export const footerLineAnimation = {
  initial: { width: 0 },
  whileInView: { width: "100%" },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true },
};

export const footerAppearanceAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.15 },
};

//MOBILE MENU
export const menuVariants = {
  open: {
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  closed: {
    x: "100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const menuNavLinks = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: "easeInOut" },
};

export const menuSocialLinks = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: "easeInOut" },
};

//ABOUT PAGE
export const aboutHeaderLogo = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true },
};

export const aboutHeaderDescription1 = {
  initial: { opacity: 0, y: 150 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true },
};

export const aboutHeaderDescription2 = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.1 },
};

export const sectionAdditionalInfo = {
  initial: { opacity: 0, y: 120 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.45 },
};

export const projectAppearance = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true },
};

export const aboutSectionProjectLineAnimation = (index: number) => ({
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.35 },
  style: {
    transformOrigin:
      window.innerWidth < 768 ? "left" : index % 2 === 0 ? "right" : "left",
  },
});

//SECTION
export const sectionTitleAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
  viewport: { once: true },
};

export const sectionTitleLineAnimation = {
  initial: { width: 0 },
  whileInView: { width: "100%" },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true },
};

//PAGE TITLE ANIMATION
export const pageTitleAnimation = {
  initial: { y: 75, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.35 },
};

//PAGE CONTACTS ANIMATION
export const contactsPageAnimation = {
  initial: { y: 25, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.75, ease: "easeInOut" },
  viewport: { once: true, amount: 0.35 },
};

//PAGE CONTACTS LINE ANIMATION
export const contactsPageLineAnimation = {
  initial: { width: 0 },
  whileInView: { width: "100%" },
  transition: { duration: 0.75, ease: "easeInOut" },
  viewport: { once: true },
};

//NOT FOUND PAGE COMPONENTS APPEARANCE
export const notFoundPageAppearance = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true },
};
