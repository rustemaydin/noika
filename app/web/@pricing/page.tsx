"use client";

import { Pricing } from "@/components/ui/pricing";

const demoPlans = [
  {
    name: "Başlangıç",
    price: "4999",
    yearlyPrice: "3999",
    features: [
      "Tek Sayfa Web Sitesi",
      "Mobil Uyumlu",
      "Temel SEO",
      "Ücretsiz Dağıtım İşlemi",
      "Ücretsiz Alan Adı Entegrasyonu",
      "Hazır Şablon Düzenleme",
    ],
    description: "Tanıtım, Kurumsal, Portföy, Blog ve Hazır Tema Siteler",
    buttonText: "İletişime Geç",
    href: "https://wa.me/05416400726?text=Merhaba,%20başlangıç%20paketini%20almak%20istiyorum!",
    isPopular: false,
  },
  {
    name: "Profesyonel",
    price: "9999",
    yearlyPrice: "7999",
    features: [
      "3-5 Sayfa",
      "Mobil Uyumlu",
      "Özel Tasarım (Markaya Özgü Renkler, Fontlar ve UI/UX)",
      "Gelişmiş SEO Ayarları",
      "Hız Optimizasyonu",
      "Formlar ve Etkileşimli Öğeler (İletişim Formu, Dinamik İçerikler)",
      "Ücretsiz Dağıtım İşlemi",
      "Ücretsiz Alan Adı Entegrasyonu",
      "Yapay Zeka Entegrasyonu",
    ],
    description:
      "Gelişmiş Blog ve Portföy, Admin Yönetim, Proje ve Hizmet Yönetim, Yapay Zeka Sohbet, Özel API Yönetim ve Basit E-ticaret Siterleri",
    buttonText: "İletişime Geç",
    href: "https://wa.me/05416400726?text=Merhaba,%20profesyonel%20paketini%20almak%20istiyorum!",
    isPopular: true,
  },
  {
    name: "Premium",
    price: "19999",
    yearlyPrice: "15999",
    features: [
      "5+ Sayfa Tasarımı",
      "İleri Seviye SEO Optimizasyonu",
      "Gelişmiş API Entegrasyonaları",
      "Üyelik ve Giriş İşlemleri",
      "Veritabanı entegrasyonu (PostgreSQL, MongoDB, Supabase)",
      "Gerçek zamanlı bildirimler ve API entegrasyonları",
      "Gelişmiş Yapay Zeka Projeleri",
      "Stripe veya iyzico ödeme entegrasyonu",
      "Özel iş akışları ve dinamik veriler ve daha fazlası",
    ],
    description:
      "Yapay Zeka Projeleri, Sosyal Medya Otomasyon ve Yönetim Siteleri, E-ticaret Siteleri",
    buttonText: "İletişime Geç",
    href: "https://wa.me/05416400726?text=Merhaba,%20premium%20paketini%20almak%20istiyorum!",
    isPopular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="h-full rounded-lg">
      <Pricing plans={demoPlans} />
    </div>
  );
}
