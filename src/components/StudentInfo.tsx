import { XIcon } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment";

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

const images = [
  {
    src: "/pic_me.jpg",
    alt: "picme",
  },
];
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
          <AttachmentGroup className="w-full">
            {images.map((image) => (
              <Attachment key={image.name} orientation="vertical">
                <AttachmentMedia variant="image">
                  <img src={image.src} alt={image.alt} />
                </AttachmentMedia>
                <AttachmentTrigger
                  render={
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${image.name}`}
                    />
                  }
                />
              </Attachment>
            ))}
          </AttachmentGroup>
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
