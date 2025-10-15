
import Footer from "@/components/custom/Footer";

import style from './page.module.scss';

export default function Home() {
  return (
    <div className="border border-blue-500 font-sans flex-1">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <li>1</li>
      </main>

      <Footer />
    </div>
  );
}
