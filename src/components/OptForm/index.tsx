import Image from "next/image";
import spinner from "../../../public/images/misc/spinner.png";
import styles from "./styles/OptForm.module.css";
import { ReactNode, FormEventHandler } from "react";

export declare interface OptFormProps {
  children?: ReactNode;
  onSubmit?: FormEventHandler;
}

export declare interface OptFormInputProps {
  id: string;
  placeholder?: string;
}

export declare interface OptFormButtonProps {
  children?: ReactNode;
  loading: boolean;
}

export declare interface OptFormTextProps {
  children?: ReactNode;
}

export function OptForm({ children, ...restProps }: OptFormProps) {
  return (
    <form className={styles.container} {...restProps}>
      {children}
    </form>
  );
}

OptForm.Input = function OptFormInput({
  id,
  placeholder = "",
  ...restProps
}: OptFormInputProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        id={id}
        className={styles.input}
        type="email"
        placeholder={placeholder}
        required
        {...restProps}
      />
      <label htmlFor={id} className={styles.label}>
        {placeholder}
      </label>
    </div>
  );
};

OptForm.Button = function OptFormButton({
  children,
  loading,
  ...restProps
}: OptFormButtonProps) {
  return (
    <button
      className={`${styles.button} ${loading ? styles.loading : ""}`}
      {...restProps}
    >
      {loading && <Image src={spinner} alt="spinner" />}
      {children}
      <span id="" className="chevron-right-arrow" data-uia="">
        <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
          <desc>chevron</desc>
          <path
            d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
    </button>
  );
};

OptForm.Text = function OptFormText({
  children,
  ...restProps
}: OptFormTextProps) {
  return (
    <h3 className={styles.text} {...restProps}>
      {children}
    </h3>
  );
};
