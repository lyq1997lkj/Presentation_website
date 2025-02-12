import { Banner } from '@/components/sections/banner';
import { Timeline } from '@/components/sections/timeline';
import { CaseStudies } from '@/components/sections/case-studies';
import { Ethics } from '@/components/sections/ethics';
import { Future } from '@/components/sections/future';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Banner />
      <Timeline />
      <CaseStudies />
      <Ethics />
      <Future />
    </main>
  );
}