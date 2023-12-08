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
    const radius = parseFloat(document.getElementById('circle-radius').value);
    const point = document.getElementById('circle-point').value.split(',').map(parseFloat);
    const circle = new Circle(radius);

    document.getElementById('circle-result').innerText = `
        Площа: ${circle.calculateArea().toFixed(2)} 
        Довжина: ${circle.calculateCircumference().toFixed(2)}
        Точка всередині кола: ${circle.checkPointInside(point[0], point[1])}
    `;
}
