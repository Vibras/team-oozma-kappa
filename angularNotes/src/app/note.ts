export class Note {
    id: Number;
    title: String = '';
    description: String = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}