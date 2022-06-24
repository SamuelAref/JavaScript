const data = [

    { firstName: 'Samuel', lastName: 'Arefeaynie', age: 24 },
    { firstName: 'Abel', lastName: 'Abate', age: 26 },
    { firstName: 'Girum', lastName: 'Debele', age: 34 },
    { firstName: 'Girum', lastName: 'Debele', age: 34 },

    { firstName: 'Girum', lastName: 'Debele', age: 34 },
    { firstName: 'Girum', lastName: 'Debele', age: 34 },
    { firstName: 'Girum', lastName: 'Debele', age: 34 },
    { firstName: 'Girum', lastName: 'Debele', age: 34 },
    { firstName: 'Girum', lastName: 'Debele', age: 34 },
    { firstName: 'Girum', lastName: 'Debele', age: 34 },


];

const container = document.getElementById('container');


for (let i of data) {

    //create element

    const member = document.createElement('div');
    member.id = 'member';


    const naming = document.createTextNode(`Name: ${i.firstName} ${i.lastName} \n `);
    const age = document.createTextNode(`Age: ${i.age}`);

    // append 

    member.appendChild(naming);
    member.appendChild(document.createElement('br'));
    member.appendChild(age);

    container.insertAdjacentElement("afterbegin", member);


    console.log(`Name: ${i.firstName} ${i.lastName}`);
    console.log(`Age: ${i.age}`);
}





