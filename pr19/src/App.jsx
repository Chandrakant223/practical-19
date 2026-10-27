import react, { useState } from "react";

function App() {
  const [students,setstudents] = useState([
    { id: 1, name: "John", },
    { id: 2, name: "Jane", },
    { id: 3, name: "Bob", },
  ]);
function deletestudent(id){
  setstudent(Student.filter(std=std,id!==id));
}

return (
  <div style={{padding:"20px",fontfamily:"arial"}}>
    <h2>student management</h2>

    { student.map(student => (
      <p key={student.id}>
        {student.name}{''}
<button onClick={()=>deletestudent(student.id)}>
  delete</button>
</p>
    ))}
    </div>


    );

    }

    export default App;