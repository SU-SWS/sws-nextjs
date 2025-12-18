import Link from "@components/elements/link";
import StanfordWordMark from "@components/images/stanford-wordmark";
export const Lockup = async () => {

  return (
    <div className="py-25">
      <Link href="/" className="flex no-underline">
        <div className="self-end">
          <div className="mr-5 border-black pr-5 lg:inline-block lg:border-r">
            <StanfordWordMark className="block max-h-[30px] w-auto text-cardinal-red no-underline" />
          </div>
          <div className="type-2 font-normal text-black lg:inline-block">Stanford Web Services</div>
        </div>
      </Link>
    </div>
  );
};

export default Lockup;
