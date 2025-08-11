                               //ASSIGNMENT 6

//Q.1 Q1. Create a Function.
//Answers..
function createFunction(obj) {
    function setter() {
        console.log(obj.name);
    }
    obj.setter = setter; 
}

let obj = { name: "Utkarsh" };
createFunction(obj);
obj.setter();

//Q.2 Q2. Delete a Parameter.
//Answers..
function deleteParameter(del) {
    delete del.rollno; 
    return del;    
}
let del = {
    name: "Utkarsh",
    rollno: 129,
};
let updateddel= deleteParameter(del);
console.log('rollno' in updateddel ? "False" : "True");

// Q.3 Check whether the Package is Dream Package or not.
//Answers..
function checkDreamPackage(dre) {
    if (dre.salary > 500000) {
        return "Dream";
    } else {
        return "NotDream";
    }
}
let student = { salary: 100000 };
console.log(checkDreamPackage(student));

//Q4. Check whether the Object has a parameter or not.
//Answers...
function para(meter) {
    for (let key in meter) {
        return "true"; 
    }
    return "false"; 
}
let obj1 = {};
let obj2 = { name: "Akash" };
console.log(para(obj1)); 
console.log(para(obj2)); 

//Q5. Merge the Objects.
//Answers...
function mobj(mobj1, mobj2) {
    return { ...mobj1, ...mobj2 };
}
let mobj1 = { name: "Utkarsh", id: 129 };
let mobj2 = { state: "Haryana", code: 121009 };
let merged = mobj(mobj1, mobj2);
console.log(merged);

//Q6. Object Multiplyer.
//Answers...
function objectMultiplyer(OM, N) {
    for (let key in OM) {
        OM[key] *= N; 
    }
    return OM;
}
let N = 2;
let OM= { id: 12, houseno: 146 };
let result = objectMultiplyer(OM, N);
console.log(result.id, result.houseno);

// Q7. Find the sum of Object Members.
//Answers...
function Check1(add) {
    return add.p1 + add.p2 + add.p3;
}
let add = { p1: 1, p2: 2, p3: 3 };
console.log(Check1(add)); 

// Q8. Check whether the Objects are same or not.
//Answers...
function checkObjects(CO, new_name, new_id) {
    if (CO.name === new_name && CO.id === new_id) {
        return "true";
    } else {
        return "false";
    }
}
let CO= { name: "Utkarsh", id: 2 };
console.log(checkObjects(CO, "Prepbytes", 3)); 
console.log(checkObjects(CO, "Utkarsh", 2));   

