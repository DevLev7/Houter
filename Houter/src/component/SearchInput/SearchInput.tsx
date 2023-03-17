"use client";
import React, { useCallback } from "react";
import styles from "./SearchInput.module.scss";
import LocationIcon from "../icons/LocationIcon";
import Button from "../Button/Button";
import ArrowIcon from "../icons/Arrow";
import cn from "@/utils/cn";

interface ISearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: ({
    event,
    value,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    value: string;
  }) => void;
  onBlur?: ({
    event,
    value,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    value: string;
  }) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  label,
  placeholder,
  required,
  className,
}) => {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (onChange) {
        onChange(value);
      }
    },
    [onChange]
  );

  const handleInputFocus = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (onFocus) {
        onFocus({ event, value });
      }
    },
    [onFocus]
  );

  const handleInputBlur = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (onBlur) {
        onBlur({ event, value });
      }
    },
    [onBlur]
  );

  return (
    <div className={cn(styles.search, className)}>
      <div className={styles.icon}>
        <LocationIcon />
      </div>
      <input
        inputMode="search"
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        required={required}
        className={styles.input}
      />
      <Button>
        Search
        <ArrowIcon />
      </Button>
    </div>
  );
};

export default SearchInput;
