export const isMobile = () => {
  return Cypress.config("viewportWidth") < Cypress.env("mobileViewportWidthBreakpoint");
};

export const randomlyFail = () => {
<<<<<<< fail-random-ui
  return;

  if (Math.floor(Math.random() * 100) > 98) {
=======
  if (Math.floor(Math.random() * 5) < 4) {
>>>>>>> main
    throw new Error("Random failure");
  }
};
