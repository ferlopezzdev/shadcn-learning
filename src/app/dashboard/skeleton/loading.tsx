import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {

    const data = '123456789'.split(''); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {data.map((item) => (
      <Card key={item} className="p-2">
        <CardHeader className="flex-row">
          <Skeleton className="rounded-full mr-2 w-10 h-10" />
        </CardHeader>

        <div>
          <Skeleton className="h-4 w-1/2 mb-2 flex-grow" />
          <Skeleton className="h-4 w-full mb-2 flex-grow" />
        </div>

        <CardFooter className="flex justify-end">
            <Skeleton className="h-8 w-16" />
        </CardFooter>
      </Card>
    ))}
  </div>
  )
}
