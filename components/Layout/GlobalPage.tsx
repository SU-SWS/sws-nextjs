import PageHeader from "@/components/Masthead/PageHeader";
import BackToTop from "@/components/BackToTop/BackToTop";
import PageFooter from "@/components/GlobalFooter/PageFooter";
import { HTMLAttributes } from "react";
import twMerge from "@/utilities/utils/twMerge";

type Props = HTMLAttributes<HTMLDivElement>;
const GlobalPage = ({ children, ...props }: Props) => {
  return (
    <div
      {...props}
      className={twMerge("flex min-h-screen flex-col", props.className)}
    >
      <PageHeader data-nosnippet="true" />

      <main id="main-content" className="mb-32 flex-grow">
        {children}

        <BackToTop />
      </main>
      <PageFooter data-nosnippet="true" />
    </div>
  );
};
export default GlobalPage;
