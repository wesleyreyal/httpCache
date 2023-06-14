import { NextPage } from 'next';
import React from 'react';
import { Title } from 'components/common/text';
import { Blur } from 'components/common/block';
import { BaseButton, OutlinedButton } from 'components/common/button';
import { useRouter } from 'next/navigation';
import { ROUTES } from 'routes';
import { CardList } from 'components/list/card';
import Image from 'next/image';
import map from 'public/images/map.png';

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <Image src={map} width={1000000} height={1000000} className="absolute" alt="background world map" />
      <section className="w-full flex flex-col items-center gap-y-44">
        <div className="m-0 justify-center">
          <Blur className="flex flex-col p-4 items-center max-w-screen-sm gap-y-10 py-6 px-12">
            <Title title="Say hello to Souin !" />
            <p className="text-justify">
              Souin is an intuitive HTTP cache management application that enables servers to cache web data, improving
              website speed and reducing bandwidth usage. With it, you can easily configure and manage cache policies,
              ensuring fast and reliable content delivery to your users. Plus, as an open source application, Souin
              provides flexibility and transparency, allowing for customizations and contributions from the community.
            </p>
            <BaseButton text="Try it now" onClick={() => push(ROUTES.REGISTER)} className="text-white" />
          </Blur>
        </div>

        <div className="w-full max-w-screen-xl flex flex-col gap-y-12">
          <Title title="Souin is better" />
          <CardList />
        </div>

        <div className="flex flex-col items-center max-w-screen-sm mx-12 lg:max-w-screen-lg gap-y-10">
          <Title title="Open-source" />
          <p className="text-justify">
            Souin is built for the community, by the community. Its code is totally open-source available on the github
            repository{' '}
            <a href="https://github.com/darkweak/souin" target="_blank">
              github.com/darkweak/souin
            </a>
            . Everyone can access, audit and explore the code. Feel free to open a PR or issues if you think some parts
            are not working as expected, if you encounter some troubles to configure it or if the doc is not clear
            enough. There are no hidden part, or enterprise edition because it doesn't make sense to make money on the
            back of the contributors and all features in Souin will stay free forever.
          </p>
          <OutlinedButton className="btn-outline" icon="github" text="Join the project" variant="ghost" />
        </div>
      </section>
    </>
  );
};

export default Home;
