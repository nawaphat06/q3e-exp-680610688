import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={<Button variant="secondary">Nawapat Prompong</Button>}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <img src="/pic_me.jpg" alt="test" className="rounded-lg shadow-md " />
          <div className="p-4">
            <DrawerHeader>Nawapat Prompong</DrawerHeader>
            <DrawerDescription>
              นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
              มหาวิทยาลัยเชียงใหม่
            </DrawerDescription>
            <DrawerDescription>
              Hobbies: Playing games, Watching movies
            </DrawerDescription>
            <DrawerDescription>
              Email: nawapat_prompong@cmu.th
            </DrawerDescription>
            <DrawerDescription>Social : tt.tannx (IG)</DrawerDescription>
          </div>
        </div>
        <DrawerFooter>
          <p>รหัสนักศึกษา: 680610688</p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
