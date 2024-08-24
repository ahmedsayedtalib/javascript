/**Nested Objects
 */
let available = "Yes";
let uName = {
    name: "Ahmed Sayed",
    email: "ahmedsayed@akmed.com",
    skills: ["HTML","CSS","JS","RHEL","MCSA","k8s","Terraform","Jenkins","Ansible","CheckPoint","Fortinet","CCNP"],
    available: false,
    addresses: { // address is a nested object because it contains another object"Sudan"
        ksa: "Jeddah",
        sudan: {
            one: "Khartoum",
            two: "Dongola",
        }},checkAV: function() {
            if (uName.available === true) {
                return `${uName.name} is available to work`}
                else if (uName.available === false){
                    return `${uName.name} is not available to work`;
                }
                else {return `WHAT???!!!`;};
            
        }
}

console.log(uName.name);
console.log(uName.email);
console.log(uName.skills);
console.log(uName.addresses.sudan.two);
console.log(uName.checkAV());


