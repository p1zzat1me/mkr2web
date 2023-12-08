class Ring extends Circle {
    constructor(outerRadius, innerRadius) {
        super(outerRadius);
        this.innerRadius = innerRadius;
    }

    calculateRingArea() {
        const outerArea = super.calculateArea();
        const innerArea = Math.PI * Math.pow(this.innerRadius, 2);
        const ringArea = outerArea - innerArea;

        if (ringArea < 0) {
            throw new Error("Неправильно введені дані: Зовнішній радіус повинний бути більше внутрішнього.");
        }

        return ringArea;
    }

    checkPointInsideRing(x, y) {
        const distanceFromCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        return distanceFromCenter <= this.radius && distanceFromCenter >= this.innerRadius;
    }
}

function calculateRing() {
    try {
        const outerRadius = parseFloat(document.getElementById('outer-radius').value);
        const innerRadius = parseFloat(document.getElementById('inner-radius').value);
        const point = document.getElementById('ring-point').value.split(',').map(parseFloat);
        const ring = new Ring(outerRadius, innerRadius);

        const ringArea = ring.calculateRingArea();

        document.getElementById('ring-result').innerText = `Площа кільця: ${ringArea.toFixed(2)}
        Точка всередині кільця: ${ring.checkPointInsideRing(point[0], point[1])}`;
    } catch (error) {
        document.getElementById('ring-result').innerHTML = `<span style="color: red;">Помилка: ${error.message}</span>`;
    }
}
