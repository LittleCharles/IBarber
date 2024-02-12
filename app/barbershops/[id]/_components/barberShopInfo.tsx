"use client"

import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";

interface BarberShopInfoProps {
    barbershop: Barbershop
}

const BarberShopInfo = ({barbershop}: BarberShopInfoProps) => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back()
    }
    return ( 
     <>
        <div className="h-[250px] w-full relative">
            <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
                <ChevronLeftIcon/>
            </Button>

            <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
                <MenuIcon/>
            </Button>
            <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{
                objectFit: "cover"
            }}
            className="opacity-75"
            />
        </div>

        <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
            <h1 className="text-xl font-bold">{barbershop.name}</h1>
            <div className="flex items-center gap-2 mt-2">
            <MapPinIcon className="text-primary" size={18}/>
            <p className="text-sm">{barbershop.address}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
            <StarIcon className="text-primary" size={18}/>
            <p className="text-sm">5,0 (218 avaliacoes)</p>
            </div>
        </div>
        </> );
}
 
export default BarberShopInfo;