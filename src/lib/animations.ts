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

export const featuredProjectsTitleAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const featuredProjectsLineAnimation = {
  initial: { width: 0 },
  whileInView: { width: "100%" },
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
