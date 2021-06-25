/* eslint-disable @next/next/no-img-element */
import styles from "./styles/Hero.module.css";

export function Hero({ children, ...restProps }) {
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
}) {
  return (
    <>
      <img className={styles.background} src={src} alt={alt} {...restProps} />
      <div className={styles.content}>{children}</div>
    </>
  );
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return (
    <h1 className={styles.title} {...restProps}>
      {children}
    </h1>
  );
};

Hero.SubTitle = function HeroSubTitle({ children, ...restProps }) {
  return (
    <h2 className={styles.subTitle} {...restProps}>
      {children}
    </h2>
  );
};
