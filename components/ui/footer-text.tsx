import { WhatsApp } from "dicons";
import Image from "next/image";
import NextLink from "next/link";
import { Button } from "./button";
import Link from "next/link";
function StackedCircularFooter() {
  return (
    <footer className=" ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-primary/10 p-8">
            <NextLink
              className="flex justify-center items-center gap-1"
              href="/"
            >
              <Image
                priority
                alt="logo"
                className="object-cover"
                height={100}
                src="/logo/logo.png"
                width={100}
              />
              <p className="font-bold text-7xl md:text-inherit">NOİKA</p>
            </NextLink>
          </div>
          <div className="mb-8 flex space-x-4">
            <Link
              href="https://wa.me/05416400726?text=Merhaba,%20bilgi%20almak%20istiyorum!"
              className="rounded-full"
            >
              <WhatsApp className="h-8 w-8" />
              <span className="sr-only">Whatsapp</span>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date(Date.now()).getFullYear()} Noika. Tüm Hakları
              Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { StackedCircularFooter };
