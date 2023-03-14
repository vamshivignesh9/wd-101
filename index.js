let formuse=document.getElementById("user-form");
const registered =() => {
    let values= localStorage.getItem("user-entries");
    if(values){
        values=JSON.parse(values);

    }else{
        values=[];
    }
    return values;
}

let entryres =registered();
const showentry =() =>{
    const values=registered();
    const tableEntries=values.map((entry) => {
        
        const nameCell= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const row= `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Date Of Birth</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${tableEntries} </table>`;
    let details=document.getElementById("user-entries");
    details.innerHTML = table;
}
const SaveInfo = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    entryres.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(entryres));
    showentry();
}
formuse.addEventListener("submit",SaveInfo);
showentry();



       
  function AgeValidation()
  {   let ele= document.getElementById("dob");
      const dob = document.getElementById("dob").value;
      let tap=new Date(dob);
      var mon = tap.getMonth();
      var day=tap.getDate();
      var sys = new Date(); 
      var age=parseInt(sys.getFullYear()) - parseInt(tap.getFullYear());
      if (sys.getMonth() < mon || (sys.getMonth() === mon && sys.getDate() < day))
      {
          age--;
      }
      let db= age>18 && age <55;
      if(db===false)
      {
          ele.setCustomValidity("Age should between 18 and 55");
          ele.reportValidity("");
      }
      else{
      ele.setCustomValidity("");
      }
  }