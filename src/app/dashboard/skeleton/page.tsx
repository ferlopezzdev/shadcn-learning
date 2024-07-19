import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return "123456789".split(""); // ['1', '2', '3', ...]
};

export default async function Page() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item} className="p-2">
          <CardHeader className="flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt="Shadcn"
              width={100}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
          </CardHeader>

          <div>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </div>

          <CardFooter className="flex justify-end">
            <Button>Más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
