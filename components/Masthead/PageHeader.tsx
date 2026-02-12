import { HTMLAttributes } from "react";
import twMerge from "@/utilities/utils/twMerge";
import MainMenu from "@/components/MainNav/MainMenu";
import Lockup from "@/components/Logo/Lockup";

type Props = HTMLAttributes<HTMLElement>;

const PageHeader = ({ ...props }: Props) => {
  return (
    <header {...props} className={twMerge("shadow-lg", props.className)}>
      <div className="cc pt-5 pb-1 bg-white">
        <a
          className="logo hocus:no-underline text-black hocus:text-black text-20 leading-none"
          href="https://www.stanford.edu"
        >
          Stanford University
        </a>
      </div>
      <div className="relative shadow cc">
        <Lockup />
        <MainMenu />
      </div>
    </header>
  );
};
export default PageHeader;
