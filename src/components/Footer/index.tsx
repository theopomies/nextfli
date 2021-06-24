import styles from "./styles/Footer.module.css";
import { ReactNode } from "react";

export declare interface FooterGlobProps {
  children?: ReactNode;
}

export declare interface FooterLinkProps extends FooterGlobProps {
  href: string;
}

export function Footer({ children, ...restProps }: FooterGlobProps) {
  return (
    <footer className={styles.container} {...restProps}>
      {children}
    </footer>
  );
}

Footer.Row = function FooterRow({ children, ...restProps }: FooterGlobProps) {
  return (
    <div className={styles.row} {...restProps}>
      {children}
    </div>
  );
};

Footer.Column = function FooterColumn({
  children,
  ...restProps
}: FooterGlobProps) {
  return (
    <div className={styles.column} {...restProps}>
      {children}
    </div>
  );
};

Footer.Link = function FooterLink({ children, ...restProps }: FooterLinkProps) {
  return (
    <a className={styles.link} {...restProps}>
      {children}
    </a>
  );
};

Footer.LinkContainer = function FooterLinkContainer({
  children,
  ...restProps
}: FooterGlobProps) {
  return <div className={styles["link-container"]}>{children}</div>;
};

Footer.Title = function FooterTitle({
  children,
  ...restProps
}: FooterGlobProps) {
  return (
    <h3 className={styles.title} {...restProps}>
      {children}
    </h3>
  );
};

Footer.Text = function FooterText({ children, ...restProps }: FooterGlobProps) {
  return (
    <p className={styles.text} {...restProps}>
      {children}
    </p>
  );
};

Footer.Break = function FooterBreak({ ...restProps }: FooterGlobProps) {
  return <div className={styles.break} {...restProps} />;
};
