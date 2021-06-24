/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import styles from "./styles/Accordion.module.css";

export declare interface AccordionGlobProps {
  children?: ReactNode;
}

export declare interface AccordionReadActiveProps extends AccordionGlobProps {
  active: boolean;
}

export declare interface AccordionHeaderProps extends AccordionReadActiveProps {
  onClick: () => void;
}

export function Accordion({ children, ...restProps }: AccordionGlobProps) {
  return (
    <div className={styles.container} {...restProps}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: AccordionGlobProps) {
  return (
    <h2 className={styles.title} {...restProps}>
      {children}
    </h2>
  );
};

Accordion.Frame = function AccordionFrame({
  children,
  ...restProps
}: AccordionGlobProps) {
  return (
    <div className={styles.frame} {...restProps}>
      {children}
    </div>
  );
};

Accordion.Item = function AccordionItem({
  children,
  ...restProps
}: AccordionGlobProps) {
  return (
    <div className={styles.item} {...restProps}>
      {children}
    </div>
  );
};

Accordion.Header = function AccordionHeader({
  children,
  active,
  ...restProps
}: AccordionHeaderProps) {
  return (
    <button className={styles.header} {...restProps}>
      {children}
      {active ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </button>
  );
};

Accordion.Body = function AccordionBody({
  children,
  active,
  ...restProps
}: AccordionReadActiveProps) {
  return (
    <div
      className={`${active ? `${styles.open}` : `${styles.closed}`} ${
        styles.body
      }`}
      {...restProps}
    >
      <span>{children}</span>
    </div>
  );
};
