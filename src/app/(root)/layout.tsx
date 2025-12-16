import { SidebarCustomTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import { BoltIcon } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <Card className={`h-full rounded-none bg-transparent gap-0 flex justify-between border-none`}>
      <CardHeader>
        <div className={'flex justify-between items-center h-15 text-white'}>
          <div className={'w-20 h-full flex justify-center items-center'}>
            <SidebarCustomTrigger className={'md:hidden'} />
          </div>
          <div>Qiaoqiao</div>
          <div>
            <div className={'w-20 h-full flex justify-center items-center'}>
              <Button className={'size-7'} variant="ghost" size="icon">
                <BoltIcon />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      {children}

    </Card>
  );
}
