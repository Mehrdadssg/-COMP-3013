import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type HeaderProps ={
  onCreateAssignment: (assignment: string) => void,
}

export function Header({ onCreateAssignment }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Disable the button if the input value is empty
    if (value.trim() === "") {
      setInputValue("");
    }
  };

  const handleCreateButtonClick = () => {
    if (inputValue.trim() !== "") {
      onCreateAssignment(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form
        className={styles.newAssignmentForm}
        onSubmit={(e) => { e.preventDefault(); handleCreateButtonClick(); }}
      >
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={inputValue.trim() === ""}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
