var state="create";
// var activeStudent="";
// var profile_link=""
const students_poll=document.querySelector("#registration");
const errorPlace=document.querySelector(".error-messages");
const table=document.querySelector("#allStudents");
// function uploadProfile(event){
//      profile_link=URL.createObjectURL(event.target.files[0]);
//      console.log(event);
// }
function createRecord(student){
    const students=document.querySelector("tbody");
    const _student=document.createElement("tr");
    // const profile=document.createElement("td");
    const id=document.createElement("td");
    const name=document.createElement("td");
    const program=document.createElement("td");
    const samaster=document.createElement("td");
    const editStudent=document.createElement("button");
    const deleteStudent=document.createElement("button");
    // const image=document.createElement("img");
    // image.src=profile_link;
    // image.classList.add("profile");
    // profile.append(image);
    id.innerText=student.id;
    student.id = student.program+''+student.semester;
    name.innerText= student.name;
    program.innerText=student.program;
    samaster.innerText=student.samaster;
    editStudent.innerText="Edit";
    deleteStudent.innerText="Delete";
    editStudent.classList.add("action-button");
    deleteStudent.classList.add("action-button");
    deleteStudent.addEventListener('click',function(){
        this.closest("tr").remove();  
    })
    // editStudent.addEventListener('click',function(){
    //     const student=this.closest("tr");
    //     students_poll[0].value=student.children[1].innerText; 
    //     students_poll[1].value=student.children[2].innerText; 
    //     students_poll[2].value=student.children[3].innerText; 
    //     students_poll[3].value=student.children[4].innerText; 
    //     //students_poll[4].value=student.children[0].src; 
    //     student.children[6].disabled=true;
    //     for(let el=0;el<student.childElementCount-2;el++){student.children[el].classList.toggle("text-muted");}
    //     state="update";activeStudent=student;
    //     this.disabled=true;
    //     profile_link="";
    // })
   _student.append(id);_student.append(name);_student.append(program);_student.append(samaster);
    _student.append(editStudent);
    _student.append(deleteStudent);
    students.append(_student);
    students_poll.reset();
}
// function updateReord(){
//     if(validateRegistration){
//     activeStudent.children[1].classList.toggle("text-muted").innerText=students_poll[0].value;
//     activeStudent.children[2].classList.toggle("text-muted").innerText=students_poll[1].value;
//     activeStudent.children[3].classList.toggle("text-muted").innerText=students_poll[2].value;
//     activeStudent.children[4].classList.toggle("text-muted").innerText=students_poll[3].value;
//     activeStudent.children[5].disabled=false;
//     activeStudent.children[6].disabled=false;
//     students_poll.reset();
//     state="create";
//     activeStudent="";
//     }
// }
function validateRegistration(){

    if (student.id > 0 && student.name > 0 && student.program > 0 && student.samaster > 0 )
    // if (students_poll.elements[0].value.trim().length==0 || students_poll.elements[1].value.trim().length==0 || students_poll.elements[2].value.trim().length==0 ||students_poll.elements[3].value.trim().length==0)
    {
        errorPlace.innerText="Please fill all the fields";
        
        return false;
    }
    errorPlace.innerText="";
    return true;
}
function addRecord(){
    if(validateRegistration()){
    student={
        'id':student.id,
        'name':student.name,
        'program':student.program,
        'samaster':student.samaster,
        // 'id':students_poll.elements[0].value.trim(),
        // 'name':students_poll.elements[1].value.trim(),
        // 'program':students_poll.elements[2].value.trim(),
        // 'samaster':students_poll.elements[3].value.trim(),
    }
    if (state=="create") createRecord(student)
    else updateReord() 
    }
}