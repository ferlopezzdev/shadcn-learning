import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="gird grid-cols-4 gpa-4">
      <Badge capitalize variant={"default"}>default</Badge> 
      <Badge variant={"destructive"}>destructive</Badge> 
      <Badge variant={"outline"}>outline</Badge> 
      <Badge variant={"secondary"}>secondary</Badge> 
      <Badge capitalize variant={"info"}>info</Badge> 
      <Badge capitalize variant={"success"}>success</Badge> 
      </div>
  );
}