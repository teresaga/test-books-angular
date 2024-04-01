export class Book {
    constructor (
        public name: string,
        public author: string,
        public date: string,
        public calificacion: number = 2,
        public _id?: string,
    ) { this.calificacion=2}
}