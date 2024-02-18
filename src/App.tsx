import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [assignmentList, setAssignmentList] = useState<string[]>([]);
  const [countAssignment, setCountAssignment] = useState<number>(0);
  const [countComplete, setCountComplete] = useState<number>(0);

  const handleSetCountComplete = () => {
    setCountComplete((prevCount) => {
      const newCount = prevCount + 1;
      return newCount >= 0 ? newCount : 0; // Ensure countComplete is not negative
    });
  };
  const handleDecreaseCountComplete = () => {
    setCountComplete((prevCount) => {
      const newCount = prevCount - 1;
      return newCount >= 0 ? newCount : 0; // Ensure countComplete is not negative
    });
  };

  const handleCreateAssignment = (assignment: string) => {
    setAssignmentList((prevList) => [...prevList, assignment]);
    setCountAssignment((prevCount) => prevCount + 1 );
  };

  const handleRemoveAssignment = (assignmentToRemove: string) => {
    setAssignmentList((prevList) =>
      prevList.filter((assignment) => assignment !== assignmentToRemove)
    );
  
    setCountAssignment((prevCount) => prevCount - 1);
  
    if (assignmentList.includes(assignmentToRemove)) {
      setCountComplete((prevCount) => prevCount - 1);
    }
  };
  
  return (
    <>
      <Header onCreateAssignment={handleCreateAssignment} />
      <Assignments
        assignments={assignmentList}
        onRemoveAssignment={handleRemoveAssignment}
        countAssignment={countAssignment >= 0 ? countAssignment : 0} 
        countComplete={countComplete >= 0 ? countComplete : 0}
        onSetCountComplete={handleSetCountComplete}
        onDecreaseCountComplete={handleDecreaseCountComplete}
      />
    </>
  );
}

export default App;
