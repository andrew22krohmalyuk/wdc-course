
function discriminant(a, b, c) {

    var d = b * b - (4 * a * c);

    if (d > 0){
        var x1 = (-b + Math.sqrt(d))/ (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);

        alert('Корни x1 = '+x1+', x2 = '+x2);
    } else if (d == 0) {

        var x = -b / 2*a;
        alert('Корень x = '+x);
    } else {
        alert("Два мнимых корня");
    }
}

discriminant(2,4,1);
