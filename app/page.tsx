import ActionLink from "@/components/Cta/ActionLink";
import { Heading } from "@/components/Typography/Heading";
import { Text } from "@/components/Typography/Text";
import GlobalPage from "@/components/Layout/GlobalPage";
import { Section } from "@/components/Section/Section";
import ThreeColumn from "@/components/Row/ThreeColumn";
import TwoColumn from "@/components/Row/TwoColumn";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Markdown } from "@/components/Markdown/Markdown";

export default function Home() {
  return (
    <GlobalPage>
      <Heading as="h1" className="sr-only">
        Stanford Web Services Home
      </Heading>
      <Container mb={7} mt={6}>
        <div className="max-w-900">
          <Markdown size={2}>{`
            # Our work

            Donec efficitur lectus dolor, id lobortis nulla posuere
            vel. Phasellus pulvinar tincidunt tortor, sit amet iaculis nisi
            dignissim egestas. Morbi cursus, felis id dictum eleifend, urna diam
            volutpat mi, ac suscipit enim metus ac enim.
          `}</Markdown>
        </div>
      </Container>
      <Section
        src="/images/stanford_dish.jpg"
        hasBgImage
        bgColor="primary-dark"
      >
        <TwoColumn
          column_widths="40-60"
          left={
            <div>
              <Text variant="card" className="rs-mb-8">
                Lasting Partnerships
              </Text>
              <Heading as="h2" size={3} weight="normal" font="serif">
                Momentum
              </Heading>
              <Text>
                Mauris vel nunc rutrum, semper neque a, venenatis metus. Nulla
                egestas, enim ut blandit pulvinar, lorem tellus pulvinar ex, a
                eleifend ante arcu et nulla. Fusce et cursus libero. Nullam
                vitae lacus quis augue semper luctus nec non ex. 
              </Text>
            </div>
          }
          right={
            <div>
              <Image
                className="object-cover"
                src="/images/stanford_momentum.png"
                alt="Screenshot of the Stanford Momentum website"
                height={738}
                width={768}
              />
            </div>
          }
        />
        <div className="mx-auto w-fit">
          <ActionLink href="/" variant="white">
            Learn more about our work
          </ActionLink>
        </div>
      </Section>
      <Section bgColor="secondary">
        <div className="w-full cc xl:mx-0 xl:p-0 xl:max-w-[1000px]">
          <Text size={4} font="serif">
            Vestibulum massa nibh, fermentum ut orci iaculis, placerat viverra
            augue. In mauris sapien, vulputate non eros ac, malesuada.
          </Text>
        </div>
        <ThreeColumn
          left={
            <Text>
              Mauris vel nunc rutrum, semper neque a, venenatis metus. Nulla
              egestas, enim ut blandit pulvinar, lorem tellus pulvinar ex, a
              eleifend ante arcu et nulla. Fusce et cursus libero. Nullam vitae
              lacus quis augue semper luctus nec non ex. 
            </Text>
          }
          main={
            <Text>
              Mauris vel nunc rutrum, semper neque a, venenatis metus. Nulla
              egestas, enim ut blandit pulvinar, lorem tellus pulvinar ex, a
              eleifend ante arcu et nulla. Fusce et cursus libero. Nullam vitae
              lacus quis augue semper luctus nec non ex. 
            </Text>
          }
          right={
            <Text>
              Mauris vel nunc rutrum, semper neque a, venenatis metus. Nulla
              egestas, enim ut blandit pulvinar, lorem tellus pulvinar ex, a
              eleifend ante arcu et nulla. Fusce et cursus libero. Nullam vitae
              lacus quis augue semper luctus nec non ex. 
            </Text>
          }
        />
      </Section>
    </GlobalPage>
  );
}
