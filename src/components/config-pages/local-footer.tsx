
import twMerge from "@lib/utils/twMerge";


const LocalFooter = () => {

  return (
    <div className="local-footer bg-foggy-light py-20">
      <div className="centered">
        <div className="mb-20">
          {/* TODO: Add footer lockup */}
        </div>

        <div className="grid gap-32 md:grid-cols-2 lg:grid-cols-4 [&_a:focus]:text-black [&_a:focus]:underline [&_a:hover]:text-black [&_a:hover]:underline [&_a]:font-normal [&_a]:no-underline [&_a]:transition">
          <div className="space-y-12">
            {/* TODO: Add address, action links, and social links */}
          </div>

          <div>
            {/* TODO: Add primary footer links */}
          </div>

          <div>
            {/* TODO: Add secondary footer links */}
          </div>

          <div>
            {/* TODO: Add tertiary content */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default LocalFooter;
