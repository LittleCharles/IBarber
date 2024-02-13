"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex ">
        <Image src="/logo.png" alt="Logo" height={22} width={120} />
        <Button variant="outline" size="icon">
                <MenuIcon size={18}/>
            </Button>
        
      </CardContent>
    </Card>
  );
};

export default header;
