export class User {
    id: number | null;
    name: string;
    email: string;
    phone: string;
    image: string;
    constructor() {
        this.id = null;
        this.name = '';
        this.email = '';
        this.phone = '';
        this.image = '';
    }
}