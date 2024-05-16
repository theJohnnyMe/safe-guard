"use client";
import {
  defineCustomElements,
  TdsHeader,
  TdsHeaderHamburger,
  TdsHeaderTitle,
  TdsHeaderBrandSymbol,
} from "@scania/tegel-react";

defineCustomElements();

export default function Header() {
  return (
    <TdsHeader>
      <TdsHeaderHamburger
        onClick={() => {
          toggleMobileNav();
        }}
        aria-label="Open application drawer"
        aria-haspopup="true"
        aria-expanded="false"
      ></TdsHeaderHamburger>
      <TdsHeaderTitle>Scania Safe Guard</TdsHeaderTitle>
      <TdsHeaderBrandSymbol slot="end">
        <a aria-label="Scania - red gryphon on blue shield" href="/"></a>
      </TdsHeaderBrandSymbol>
    </TdsHeader>
  );
}
