import {  Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon  } from '@radix-ui/react-icons'

export default function Page() {
  return (
    <div>
      <Alert className="m-1">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert className="m-1" variant="destructive">
        <RocketIcon  className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert className="m-1" variant="success">
        <RocketIcon  className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

    </div>
  );
}
