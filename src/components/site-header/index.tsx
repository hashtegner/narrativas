import Image from "next/image";
import logo from './logo.png';
import Link from "next/link";
import { ReactNode } from "react";

interface SiteHeaderProps {
  isIndex?: boolean
  children?: ReactNode
}

export default function SiteHeader({ isIndex = false, children }: SiteHeaderProps) {
  return (
    <header className="has-text-centered">
      <Link href="/" className="has-text-black">
        <figure>
          <Image src={logo} quality={95} height={120} alt="Narrativas, por Fran e Alessandro Tegner" className="is-rounded" placeholder="blur" />
        </figure>

        {isIndex && (
          <p className='is-uppercase has-text-weight-bold is-size-6 is-letter-spaced'>Narrativas</p>
        )}

        {!isIndex && (
          <h1 className='is-uppercase has-text-weight-bold is-size-6 is-letter-spaced'>Narrativas</h1>
        )}
      </Link>
      {children}
    </header>
  )
}
