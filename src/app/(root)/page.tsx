import Image from "next/image";

import {
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import EnterChat from "@/components/Root/EnterChat";
import SexSelect from "@/components/Root/SexSelect";
import Footer from "@/components/Footer";
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <>
      <CardContent className="h-full mb-5!">
        <PageTransition className={'text-white h-full flex flex-col items-center justify-between'}>
          <div className={'flex flex-col items-center'}>
            <Image src={'/logo.svg'} alt="logo" loading="eager" width={120} height={120} />
            <div className={'flex flex-row justify-center items-center'}>
              <span className={'text-lg'}>悄悄</span>
            </div>
            <div className={`flex flex-row justify-center items-center`}>
              <div className={'w-2 h-2 rounded-lg mr-1.5! bg-(--online-color)'} />
              <span className={'pt-1.5 pb-1.5 text-xs text-(--font-color-focus)'}>1232131231 人正在匹配中</span>
            </div>
          </div>
          {/* 性别和年龄选择 */}
          <SexSelect />
          {/* 匹配 */}
          <EnterChat />
        </PageTransition>
      </CardContent>
      <CardFooter>
        <Footer />
      </CardFooter>
    </>
  );
}
