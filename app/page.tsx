import { H1, H2 } from "@components/elements/headers";
import { Text } from "@components/elements/text";
import GlobalPage from "@components/layouts/global-page";
import { BgImageWrapper } from "@components/paragraphs/bg-image-section";
import TwoColumn from "@components/paragraphs/rows/two-column";
import Image from "next/image";

export default function Home() {
  return (
    <GlobalPage>
      <H1 className="sr-only">Stanford Web Services Home</H1>
      <div className="w-full cc xl:p-0 xl:mx-auto xl:max-w-[1000px] rs-mt-6 rs-mb-7">
        <Text size={4} font="serif">Vestibulum massa nibh, fermentum ut orci iaculis, placerat viverra augue. In mauris sapien, vulputate non eros ac, malesuada.</Text>
      </div>
      <BgImageWrapper src="/images/stanford_dish.jpg" hasBgImage bgColor="bg-black">
        <TwoColumn column_widths="33-67" left={(
          <div className="text-white">
            <Text variant="card" className="rs-mb-8">Lasting Partnerships</Text>
            <H2 className="font-serif font-normal type-3">Momentum</H2>
            <Text>
              Mauris vel nunc rutrum, semper neque a, venenatis metus. Nulla egestas, enim ut blandit pulvinar, lorem tellus pulvinar ex, a eleifend ante arcu et nulla. Fusce et cursus libero. Nullam vitae lacus quis augue semper luctus nec non ex. 
            </Text>
          </div>)} right={(
            <div>
              <Image
                className="object-cover"
                src="/images/stanford_momentum.png"
                alt="Screenshot of the Stanford Momentum website" 
                height={738}
                width={768}
              />
            </div>
          )}
        />
      </BgImageWrapper>
    </GlobalPage>
  );
}
