import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: string[];
  onRemoveAssignment: (assignment: string) => void;
  countAssignment: number;
  countComplete: number;
  onSetCountComplete: () => void;
  onDecreaseCountComplete: () => void;
};

export function Assignments({
  assignments,
  onRemoveAssignment,
  countAssignment,
  countComplete,
  onSetCountComplete,
  onDecreaseCountComplete
}: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{countAssignment}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {countComplete} of {countAssignment}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment}
            RemoveAssignment={onRemoveAssignment}
            onSetCountComplete={onSetCountComplete}
            onDecreaseCountComplete={onDecreaseCountComplete}
          />
        ))}
      </div>
    </section>
  );
}
