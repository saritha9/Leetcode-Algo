// Given a chemical formula (given as a string), return the count of each atom.

// An atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

// 1 or more digits representing the count of that element may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

// Two formulas concatenated together produce another formula. For example, H2O2He3Mg4 is also a formula.

// A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

// Given a formula, output the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

// Function Description:
// Write a function called "getElementCounts" in the editor below to create a string of elements and the number of each.

// getElementCounts has the following parameter(s):
//   formula: The string representation of the formula

// Example 1:
// Input: 
// formula = "H2O"
// Output: "H2O"
// Explanation: 
// The count of elements are {'H': 2, 'O': 1}.

// Example 2:
// Input: 
// formula = "Mg(OH)2"
// Output: "H2MgO2"
// Explanation: 
// The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.

// Example 3:
// Input: 
// formula = "K4(ON(SO3)2)2"
// Output: "K4N2O14S4"
// Explanation: 
// The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.

// Note:
//   All atom names consist of lowercase letters, except for the first character which is uppercase.
//   The length of formula will be in the range [1, 1000].
//   formula will only consist of letters, digits, and round parentheses, and is a valid formula as defined in the problem.
const isDebug = false;

const bracketsOpenRegexp = /[\[\{]/g;
const bracketsCloseRegexp = /[\]\}]/g;

const digitRegExp = /^\d+$/;
const coefregExp = /^\d+/;

const log = (...args) => isDebug ? console.log(...args) : null;

function parseMolecule(formula, coefficient = 1) {
    let molecule = {};

    log('1 - formula ', formula);

    if (!formula) {
        return molecule;
    }

   
    if(!Array.isArray(formula)) {
        
        formula = transformBrackets(formula);
        log('2 - transformBrackets ', formula);
        
        formula = parseBrackects(formula);
        log('3 - parseBrackects ', formula);
    }

  
    if(isSimpleFormula(formula)) {
        formula = formula.join('');
        molecule = transformSimpleFormulaToObject(formula);
        molecule = multiply(molecule, coefficient);
        return molecule;
    }
  
    formula = splitCoefficients(formula);
    log('4 - splitCoefficients ', formula);

    formula.forEach((value, index, array) => {
        if(Array.isArray(value)) {
            let coef = 1;
            let nextValue = array[index+1];
          
            if (nextValue && digitRegExp.test(nextValue)) {
               
                coef = nextValue;
            }
            molecule = merge(molecule, parseMolecule(value, coef));
        } else if (!digitRegExp.test(value)) {
            
            molecule = merge(molecule, transformSimpleFormulaToObject(value));
        }
    });

    molecule = multiply(molecule, coefficient);
  var formula=[];
  for (var key in molecule) {
    formula.push(key+molecule[key]);
  }
  formula=formula.sort();
  console.log(formula.join(''));

    return molecule;
}

const transformSimpleFormulaToObject = formula => {
    const elementRegexp = /([A-Z][a-z]*)\d*/g;
    let arrOfElements = formula.match(elementRegexp);

    const reg = /(?=\d+)/i;
    const molecule = {};
    arrOfElements.forEach(value => {
        let [name, ...count] = value.split(reg);
        count = +count.join('') || 1;
        if (molecule[name]) {
            molecule[name] = molecule[name] + count;
            return;
        }
        molecule[name] = count;
    });
  
//console.log();
    return molecule;
};

const isSimpleFormula = (formula) => {
    return formula.every(value => !Array.isArray(value));
};

const merge = (molecule, leftoverMolecule) => {
    let setKeys = new Set([...Object.keys(molecule), ...Object.keys(leftoverMolecule)]);
    let res = {};
    for (let key of setKeys) {
        if (molecule[key] && leftoverMolecule[key]) {
            res[key] = molecule[key] + leftoverMolecule[key];
        } else if (molecule[key]) {
            res[key] = molecule[key];
        }
        else if (leftoverMolecule[key]) {
            res[key] = leftoverMolecule[key];
        }
    }
    return res;
};

const multiply = (molecule, coefficient = 1) => {
    for (const elementName in molecule) {
        molecule[elementName] = molecule[elementName] * coefficient;
    }
    return molecule;
 
};

const parseBrackects = (formula) => {
    const t = formula.replace(/\(/g, '",["').replace(/\)/g, '"],"');
    return JSON.parse(`["${t}"]`).filter(item=> item!=='');
  
};

const transformBrackets = (formula) => {
    return formula.replace(bracketsOpenRegexp, '(').replace(bracketsCloseRegexp, ')');

};

const splitCoefficients = (partsOfFormula) => {
    let resArr = [];

    for(let i=0; i< partsOfFormula.length; i++) {
        
        if (Array.isArray(partsOfFormula[i])) {
            resArr.push(splitCoefficients(partsOfFormula[i]));
        } else {
            
            const coef = partsOfFormula[i].match(coefregExp);

            if(coef) {
                const partWithoutCoef = partsOfFormula[i].replace(coefregExp, '');
                resArr.push(coef[0]);
                if (partWithoutCoef) {
                    resArr.push(partWithoutCoef);
                }
            } else {
                resArr.push(partsOfFormula[i]);
            }
        }
    }

    return resArr.filter(item=> item!=='');
};
console.log(parseMolecule("K4(ON(SO3)2)2"));