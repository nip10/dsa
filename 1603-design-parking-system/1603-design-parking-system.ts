class ParkingSystem {
    big = 0;
medium = 0;
small = 0;
    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        if (carType === 1 && this.big > 0) {
            this.big--;
            return true
        }  
        if (carType === 2 && this.medium > 0) {
            this.medium--;
            return true
        }  
        if (carType === 3 && this.small > 0) {
            this.small--;
            return true
        }  
        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */