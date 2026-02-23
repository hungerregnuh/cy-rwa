export const isMobile = () => {
  return Cypress.config("viewportWidth") < Cypress.env("mobileViewportWidthBreakpoint");
};

export const randomlyFail = () => {
  return Math.floor(Math.random() * 5) < 3;
};
