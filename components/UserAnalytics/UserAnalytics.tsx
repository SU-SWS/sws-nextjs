import Script from "next/script";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";

const UserAnalytics = () => {
  if (process.env.NODE_ENV === "development") return;

  const ga4 = process.env.NEXT_PUBLIC_GA4;
  const gtm = process.env.NEXT_PUBLIC_GTM;
  if (!ga4 && !gtm) return;

  return (
    <>
      <Script async src="https://siteimproveanalytics.com/js/siteanalyze_80352.js" />
      {ga4 && ga4.split(",").map(ga4ID => <GoogleAnalytics key={ga4ID} gaId={ga4ID.trim()} />)}
      {gtm && <GoogleTagManager gtmId={gtm} />}
    </>
  );
};
export default UserAnalytics;
