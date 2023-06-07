import { NextPage } from 'next';
import React from 'react';
import { Title } from 'components/common/text';
import { Blur } from 'components/common/block';
import { BaseButton } from 'components/common/button';
import { useRouter } from 'next/navigation';
import { ROUTES } from 'routes';
import { CardList } from '../components/list/card';
import Image from 'next/image';

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <main className="m-0 w-full flex flex-col items-center h-96 justify-center relative mb-24">
        <Image src="/map.png" width={1000} height={1000} className="absolute -z-10 top-0 w-full" alt="" />
        <Blur className="flex flex-col p-4 items-center max-w-screen-sm gap-y-4 py-6 px-12">
          <Title title="Say hello to Souin !" />
          <p className="text-justify">
            Souin is an intuitive HTTP cache management application that enables servers to cache web data, improving
            website speed and reducing bandwidth usage. With it, you can easily configure and manage cache policies,
            ensuring fast and reliable content delivery to your users. Plus, as an open source application, Souin
            provides flexibility and transparency, allowing for customizations and contributions from the community.
          </p>
          <BaseButton text="Try now" onClick={() => push(ROUTES.REGISTER)} className="text-white"></BaseButton>
        </Blur>
      </main>
      <div className="relative py-8">
        <Image src="/blue_line.png" alt="" className="h-36 w-full absolute top-0 -z-10" width={1000} height={100} />
        <CardList />
        <Image src="/blue_line.png" alt="" className="h-36 w-full absolute bottom-0 -z-10" width={1000} height={100} />
      </div>
    </>
  );
};

export default Home;
