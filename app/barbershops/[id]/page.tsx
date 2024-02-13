import { db } from "@/app/_lib/primas";
import BarberShopInfo from "./_components/barberShopInfo";
import ServiceItem from "./_components/serviceItem";
import { getServerSession } from "next-auth";
import { authOpitions } from "@/app/api/auth/[...nextauth]/route";

interface BarberShopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarberShopDetailsPage = async ({
  params,
}: BarberShopDetailsPageProps) => {
  const session = await getServerSession(authOpitions)
  if (!params.id) {
    // TODO redirecionar para home page
    return null;
  }

  const barberShop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barberShop) {
    // TODO redirecionar para home page
    return null;
  }

  return (
    <div>
      <BarberShopInfo barbershop={barberShop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barberShop.services.map((service) => (
          <ServiceItem key={service.id} barberShop={barberShop} service={service} isAuthenticated={!!session?.user}/>
        ))}
      </div>
    </div>
  );
};

export default BarberShopDetailsPage;
