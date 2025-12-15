import { SidebarCustomTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { BoltIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <Card className={`h-full rounded-none bg-transparent flex justify-between border-none overflow-y-auto`}>
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

      <CardContent className="h-full">
        {children}
      </CardContent>

      <CardFooter>
        <Footer />
      </CardFooter>
    </Card>
  );
}
