const arr = [
    { service: 'cap' },
    { service: 'servey' },
    { service: 'handle' },
    { service: 'data' }
];

function check(arr) {
    let foundCap = false;
    let foundServey = false;
    let foundHandle = false;
    let foundData = false;

   arr.forEach(element => {
        switch (element.service) {
            case 'cap':
                foundCap = true;
                break;
            case 'servey':
                foundServey = true;
                break;
            case 'handle':
                foundHandle = true;
                break;
            case 'data':
                foundData = true;
                break;
            default:
                break;
        }
    });

    if (foundCap) {
        if (foundServey && foundHandle && foundData) {
            return false; 
        }else  if (foundData) {
            return false; 
        }else {
            return true; 
        }
    } else {
        return false; 
    }
}


console.log(check([{ service: 'cap' }])); 
console.log(check([{ service: 'cap' }, { service: 'servey' }])); 
console.log(check([{ service: 'cap' }, { service: 'data' }]));
console.log(check([{ service: 'cap' }, { service: 'handle' }])); 
console.log(check([{ service: 'cap' }, { service: 'servey' }, { service: 'handle' }])); 
console.log(check([{ service: 'cap' }, { service: 'servey' }, { service: 'handle' }, { service: 'data' }])); 
console.log(check([{ service: 'servey' }])); 
console.log(check([{ service: 'handle' }])); 
console.log(check([{ service: 'data' }])); 
