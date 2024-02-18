import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";



type AssignmentProps = {
  title: string;
  RemoveAssignment: (assignment: string) => void;
  onSetCountComplete:()=>void,
  onDecreaseCountComplete:()=> void ,
}

export function Assignment({ title, RemoveAssignment ,onSetCountComplete,onDecreaseCountComplete}: AssignmentProps) {

  

  const [isChecked, setIsChecked] = useState(false); 
  const handleCheckClick = () => {
    setIsChecked(prevChecked => !prevChecked)

    if (isChecked) {
      onDecreaseCountComplete(); // Call the onDecreaseCount function if the check mark is being removed
    } else {
      onSetCountComplete(); // Call the onSetCountComplete function if the check mark is being added
    }
  };

  
  const handleRemoveClick = () => {
    RemoveAssignment(title);
    if (isChecked) {
      onDecreaseCountComplete(); // Call the onDecreaseCount function if the check mark is being removed by deleting the assignment
    }
  
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => {handleCheckClick()} }>
        <div>
        {isChecked && <BsCheckCircleFill size={20}  />  }
        
        </div>
        
      </button>
      

      {!isChecked ? <p>{title}</p> : <p><s>{title}</s></p>}

      <button className={styles.deleteButton} onClick={() => handleRemoveClick()}>

        <TbTrash size={20} />
      </button>
    </div>
  );
}
