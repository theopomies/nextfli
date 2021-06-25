/* eslint-disable @next/next/no-img-element */
import styles from "./styles/Hero.module.css";
import { ReactNode } from "react";

export declare interface HeroProps {
  children?: ReactNode;
}

export declare interface HeroBackgroundProps {
  children?: ReactNode;
  src: string;
  alt?: string;
}

export function Hero({ children, ...restProps }: HeroProps) {
  return (
    <section className={styles.hero} {...restProps}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

Hero.Background = function HeroBackground({
  src,
  alt = "Hero background",
  children,
  ...restProps
}: HeroBackgroundProps) {
  return (
    <>
      <img
        className={styles.background}
        src={src}
        alt={alt}
        draggable="false"
        {...restProps}
      />
      <div className={styles.content}>{children}</div>
    </>
  );
};

Hero.Title = function HeroTitle({ children, ...restProps }: HeroProps) {
  return (
    <h1 className={styles.title} {...restProps}>
      {children}
    </h1>
  );
};

Hero.SubTitle = function HeroSubTitle({ children, ...restProps }: HeroProps) {
  return (
    <h2 className={styles.subTitle} {...restProps}>
      {children}
    </h2>
  );
};
