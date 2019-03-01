const a = parseFloat(prompt('Введіть коефіцієнт a'));
const b = parseFloat(prompt('Введіть коефіцієнт b'));
const c = parseFloat(prompt('Введіть коефіцієнт c'));

const result = solution(a, b, c);
alert(result);

function solution(a, b, c){
    const d = discr(a, b, c);
    if (d == 0){
        x = -b / (2 * a);
        return 'x = ' + x ;
    }
    else if (d > 0) {
        x1 = (-b + Math.sqrt(d))/ (2 * a);
        x2 = (-b - Math.sqrt(d))/ (2 * a);
        return 'x1 = ' + x1 + ' , x2 = ' + x2 ;
    }
    else if (d < 0){
        return 'дискримінант менший за нуль, рівняння не має дійсних коренів' ; 
    }
    
}


function discr(a, b, c){
    return Math.pow(b, 2) - 4 * a * c;
}
