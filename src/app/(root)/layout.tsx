import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <Card className={`h-full rounded-none bg-transparent `}>
      <CardHeader className={'border border-red-500'}>
        <CardTitle className="text-red-400">Card Title</CardTitle>
        <div className="text-white">Center</div>
        {/* <CardDescription>Card Description</CardDescription> */}
        <CardAction className="text-red-400">Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <>{children}</>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
