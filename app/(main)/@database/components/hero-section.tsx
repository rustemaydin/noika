import AnimatedCard from "./animated";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* <Badge variant="outline">
              New Release
              <ArrowDownRight className="ml-2 size-4" />
            </Badge> */}
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Kullandığımız Veritabanları
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Veriyi modern, performanslı ve hafif çözümlerle yönetiyoruz.
            PostgreSQL güçlü yapısıyla, Supabase kolay entegrasyonuyla, MongoDB
            ise esnekliğiyle projeleriniz için ideal. Hızlı, güvenli ve
            ölçeklenebilir veritabanı çözümleri sunuyoruz.
          </p>
          {/* <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">Primary Button</Button>
              <Button className="w-full 
              sm:w-auto" variant="outline">
                Secondary Button
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div> */}
        </div>
        <AnimatedCard />
      </div>
    </div>
  );
};

export default Hero;
