import React from "react";

import Connect from "./components/cursor";

const ServicesPage = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Connect />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* <Badge variant="outline">
                New Release
                <ArrowDownRight className="ml-2 size-4" />
              </Badge> */}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Çözümlerimiz
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Çözümlerimiz için bizimle iletişime geçin.
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
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
