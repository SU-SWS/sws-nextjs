
import {HTMLAttributes} from "react";
import twMerge from "@lib/utils/twMerge";
import Link from "@components/elements/link";
import MainMenu from "@components/menu/main-menu";
import Lockup from "@components/elements/lockup/lockup";

type Props = HTMLAttributes<HTMLElement>

const PageHeader = ({...props}: Props) => {
  return (
    <header {...props} className={twMerge("shadow-lg", props.className)}>
      <div className="bg-cardinal-red">
        <div className="centered flex items-center justify-between py-3">
          <Link
            prefetch={false}
            className="font-stanford text-20 font-regular leading-none text-white no-underline hocus:text-white hocus:underline"
            href="https://www.stanford.edu"
          >
            Stanford University
          </Link>
        </div>
      </div>
      <div className="relative shadow">
        <Lockup />
        <MainMenu />
      </div>
    </header>
  );
};
export default PageHeader;
