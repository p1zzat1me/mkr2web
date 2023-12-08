class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }

    checkPointInside(x, y) {
        return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(this.radius, 2);
    }
}

function calculateCircle() {
    const radiusInput = document.getElementById('circle-radius');
    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        alert('Некоректно введений радіус. Радіус повинен бути більше за нуль.');
        return;
    }

    const point = document.getElementById('circle-point').value.split(',').map(parseFloat);
    if (isNaN(point)){
        alert('Неправильно введені значення точок');
        return;
    }
    const circle = new Circle(radius);

    document.getElementById('circle-result').innerText = `
        Площа: ${circle.calculateArea().toFixed(2)} 
        Довжина: ${circle.calculateCircumference().toFixed(2)}
        Точка всередині кола: ${circle.checkPointInside(point[0], point[1])}
    `;
}
