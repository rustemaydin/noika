import AnimatedCard from "./animated";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid items-center gap-8 px-4 grid-cols-1 lg:grid-cols-2">
        {/* Mobilde önce, lg'de sonra */}
        <div className="flex flex-col items-center text-center lg:order-2">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Kullandığımız Veritabanları
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Veriyi modern, performanslı ve hafif çözümlerle yönetiyoruz.
            PostgreSQL güçlü yapısıyla, Supabase kolay entegrasyonuyla, MongoDB
            ise esnekliğiyle projeleriniz için ideal. Hızlı, güvenli ve
            ölçeklenebilir veritabanı çözümleri sunuyoruz.
          </p>
        </div>

        {/* Mobilde sonra, lg'de önce */}
        <div className="lg:order-1">
          <AnimatedCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
