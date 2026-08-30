class DynamicArray {
    private capacity: number;
    private capacityArray: number[] = [];
    private capacitySize: number;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.capacitySize = 0;
        this.capacityArray = new Array(this.capacity).fill(0);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.capacityArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.capacityArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.capacitySize === this.capacity) {
            this.resize();
        }
        this.capacityArray[this.capacitySize] = n;
        this.capacitySize++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if (this.capacitySize > 0) {
            this.capacitySize--;
        }
        return this.capacityArray[this.capacitySize];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newArray = new Array(this.capacity).fill(0);
        for (let i = 0; i < this.capacitySize; i++) {
            newArray[i] = this.capacityArray[i];
        }
        this.capacityArray = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.capacitySize;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
