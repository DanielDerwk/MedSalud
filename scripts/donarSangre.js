const form = document.getElementById('form');
const enviar=document.getElementById('enviar');
const names=document.getElementById('name');
const lastNames=document.getElementById('lastName');
const age=document.getElementById('age');
const identification=document.getElementById('id');
const email=document.getElementById('email');
const date=document.getElementById('date');
const objectValid={
    nombres:false,
    apellidos:false,
    edad:false,
    documento:false,
    correo:false,
    cita:false
};
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validForm()===-1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
});
const validForm=()=>{
    const values=Object.values(objectValid);
    let response=values.findIndex(e=>e===false);
    return response;
}
names.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.nombres = e.target.value.match(namesRegex)?true:false;
    console.log(Object.values(objectValid));
});
lastNames.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const lastNamesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.nombres = e.target.value.match(lastNamesRegex)?true:false;
    console.log(Object.values(objectValid));
});
age.addEventListener('change',function(e){
    const ageRegex=/(^[0-9]{1,2}$)/g;
    if((age.value.match(ageRegex))&&((parseInt(age.value))>=18)){
        objectValid.age=true;
    }else{
        objectValid.age=false;
    }
    console.log(Object.values(objectValid));
});