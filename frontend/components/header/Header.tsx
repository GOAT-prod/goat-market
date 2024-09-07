import { Icon16LikeOutline, Icon16Place, Icon16ShoppingCartOutline } from "@vkontakte/icons";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/shared/lib/utils";

import { Avatar, AvatarImage } from "../../shared/ui/avatar";
import { Button } from "../../shared/ui/button";
import { Text } from "../../shared/ui/text";
import { Container } from "../container/Container";
import { SeachInput } from "../search-input/SeachInput";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("h-[var(--header-height)] border-b border-b-[#CBCBCB]", className)}>
      <Container className='flex'>
        <Link
          href='/'
          className='flex items-center gap-[10px] border-r border-r-[#CBCBCB] px-[40px] py-[23px]'
        >
          <Image src='/goat-market-logo.svg' alt='Логотип сайта' width={60} height={60} />
          <Text className='whitespace-nowrap text-[26px]'>
            <strong>goat</strong> market.
          </Text>
        </Link>
        <div className='flex flex-1 items-center justify-between gap-[30px] px-[35px] py-[32px]'>
          <SeachInput className='flex-1' />
          <div className='flex items-center gap-[30px]'>
            <Button theme={"outline"} className='flex gap-[10px]'>
              <Icon16Place />
              <Text>Пенза</Text>
            </Button>
            <Button className='flex gap-[10px]'>
              <Icon16LikeOutline />
              <Text>Избранное</Text>
            </Button>
            <Button className='flex gap-[10px]'>
              <Icon16ShoppingCartOutline />
              <Text>Корзина</Text>
            </Button>
            {/* <Avatar>
              <AvatarImage
                className='hover:border'
                width={52}
                height={52}
                src='https://avatars.mds.yandex.net/i?id=245237b422d072b2a1bafd1836d2ab4a132bbdb6-4408158-images-thumbs&n=13g'
                alt='Аватар'
              />
            </Avatar> */}
          </div>
        </div>
      </Container>
    </header>
  );
};
