// The client's Cherry payment-plan account, exactly as their live
// /payment-plans page passes it to _hw("init") (durhamanimalhospital.com,
// read 2026-10-28). Used by CherryWidget.astro on /payment-plans.
export const cherryAccount = {
  slug: "durham-animal-hospital",
  name: "Durham Animal Hospital",
  images: [36],
  customLogo: "",
  defaultPurchaseAmount: 750,
  customImage: "",
  imageCategory: "veterinary",
  language: "en",
};
