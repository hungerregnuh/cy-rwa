export const isMobile = () => {
  return Cypress.config("viewportWidth") < Cypress.env("mobileViewportWidthBreakpoint");
};

export const randomlyFail = () => {
  if (Math.floor(Math.random() * 5) < 4) {
    throw new Error("Random failure");
  }
};
