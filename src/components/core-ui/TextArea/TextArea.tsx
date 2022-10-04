import React, { HTMLAttributes, FocusEvent } from "react";
import styles from "./TextArea.module.scss";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  onChange,
  onBlur,
  name,
  placeholder,
  id,
  rows = 6,
}: Props) => {
  return (
    <div className={styles.textareaContainer}>
      <textarea
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        id={id}
        rows={rows}
      />
    </div>
  );
};
