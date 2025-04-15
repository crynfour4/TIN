class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    getArea () {
        return this.height * this.width;
    }

    getPerimeter() {
        return (2 * this.width) + (2 * this.height);
    }

    isSquare() {
        if (this.height === this.width) {
            return true;
        } else {
            return false;
        }
    }
}