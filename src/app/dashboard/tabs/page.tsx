import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabAccount } from "./ui/tab-account";
import { TabPassword } from "./ui/tab-password";

export default function Page() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="user">User</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <TabAccount />
        </TabsContent>
        <TabsContent value="password">
         <TabPassword />
        </TabsContent>
        <TabsContent value="user">
          <div>User {' '} - Personalizado</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
