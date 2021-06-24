import styles from "./styles/Jumbotron.module.css";
import { ReactNode } from "react";

export declare interface JumbotronGlobProps {
  children?: ReactNode;
}

export declare interface JumbotronProps extends JumbotronGlobProps {
  direction?: "row" | "row-reverse";
}

export declare interface JumbotronImageProps extends JumbotronGlobProps {
  alt: string;
  src: string;
}

export function Jumbotron({
  children,
  direction = "row",
  ...restProps
}: JumbotronProps) {
  return (
    <section className={`${styles.item}`} {...restProps}>
      <div className={`${styles.inner} ${styles[`inner__${direction}`]}`}>
        {children}
      </div>
    </section>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: JumbotronGlobProps) {
  return (
    <div className={styles.container} {...restProps}>
      {children}
    </div>
  );
};

Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}: JumbotronGlobProps) {
  return (
    <div className={styles.pane} {...restProps}>
      {children}
    </div>
  );
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: JumbotronGlobProps) {
  return (
    <h2 className={styles.title} {...restProps}>
      {children}
    </h2>
  );
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: JumbotronGlobProps) {
  return (
    <h3 className={styles["sub-title"]} {...restProps}>
      {children}
    </h3>
  );
};

Jumbotron.Image = function JumbotronImage({
  alt,
  ...restProps
}: JumbotronImageProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} className={styles.image} {...restProps} />;
};
