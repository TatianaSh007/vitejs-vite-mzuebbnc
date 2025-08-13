import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Percent } from "lucide-react";
import QRCode from "qrcode.react";

type Offer = {
  id: string;
  title: string;
  description: string;
  reward: string;
  image: string;
  expires: string;
  url: string;
};

const MOCK_OFFERS: Offer[] = [
  {
    id: "1",
    title: "Кэшбэк 5% на все покупки",
    description: "Получите кэшбэк при оплате картой нашего банка.",
    reward: "5%",
    image: "https://placehold.co/600x400?text=Offer+1",
    expires: "2025-09-30",
    url: "https://example.com/offer1",
  },
  {
    id: "2",
    title: "Скидка 20% на электронику",
    description: "Эксклюзивная скидка на популярные модели смартфонов.",
    reward: "20%",
    image: "https://placehold.co/600x400?text=Offer+2",
    expires: "2025-08-31",
    url: "https://example.com/offer2",
  },
  {
    id: "3",
    title: "Бонусы за приглашение друга",
    description: "Пригласите друга и получите бонусы на счёт.",
    reward: "1000₽",
    image: "https://placehold.co/600x400?text=Offer+3",
    expires: "2025-09-15",
    url: "https://example.com/offer3",
  },
];

export default function PartnerOffersShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Актуальные офферы</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_OFFERS.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow p-4 flex flex-col"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="rounded-xl mb-4 w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
              <div className="flex items-center gap-2 text-green-600 font-bold mb-2">
                <Percent className="w-4 h-4" /> {offer.reward}
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <Calendar className="w-4 h-4" /> до {offer.expires}
              </div>
              <div className="mt-auto flex justify-between items-center">
                <a
                  href={offer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  Подробнее <ArrowRight className="w-4 h-4" />
                </a>
                <QRCode value={offer.url} size={48} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
