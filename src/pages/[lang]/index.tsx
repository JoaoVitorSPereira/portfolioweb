import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';

import HomeContent from '@/components/Contents/home/HomeContent';
import SeoHead from '@/components/SeoHead';
import { getAllLanguageSlugs, getLanguage } from '@/lib/lang';

interface Props {
  language: string;
}

export default function HomeScreen({ language }: Props) {
  return (
    <>
      <SeoHead language={language} />
      <HomeContent />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllLanguageSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      language: getLanguage(String(params?.lang)),
    },
  };
}
