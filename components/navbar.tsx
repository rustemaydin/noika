import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { ShinyButton } from "./ui/shiny-button";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar className="" maxWidth="xl" position="sticky">
      <NavbarContent className=" justify-start " justify="start">
        <NavbarBrand as="li" className="gap-3 ">
          <NextLink
            className="flex justify-center w-1/2  items-center gap-1"
            href="/"
          >
            <Image
              priority
              alt="logo"
              className="object-contain h-24"
              height={44}
              src="/logo/logo.png"
              width={44}
            />
            <p className="font-bold text-inherit">NOİKA</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex justify-center space-x-2 items-center gap-4">
        <ul className="flex md:gap-8 gap-2 justify-center items-center">
          <NavbarItem key={"1"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary hidden md:flex data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/"}
            >
              {"Anasayfa"}
            </NextLink>
          </NavbarItem>
          <NavbarItem key={"2"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/web"}
            >
              <p className="bg-gradient-to-r text-sm md:text-lg font-bold from-blue-600  to-orange-400  text-transparent bg-clip-text">
                {"Web Apps"}
              </p>
            </NextLink>
          </NavbarItem>
          <NavbarItem key={"3"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary mr-2 data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/web"}
            >
              <p className="bg-gradient-to-r mr-2 md:mr-0 font-bold text-sm md:text-lg from-orange-600  to-green-400  text-transparent bg-clip-text">
                {"Apps"}
              </p>
            </NextLink>
          </NavbarItem>
          {/* <NavbarItem key={"4"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/web"}
            >
              <p className="bg-gradient-to-r font-bold from-green-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
                {"AI"}
              </p>
            </NextLink>
          </NavbarItem> */}
          {/* <NavbarItem key={"5"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/web"}
            >
              {"Hakkımızda"}
            </NextLink>
          </NavbarItem> */}
        </ul>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <ShinyButton>İletişime Geç</ShinyButton>
        </NavbarItem>
      </NavbarContent>

      <ThemeSwitch />
    </HeroUINavbar>
  );
};
