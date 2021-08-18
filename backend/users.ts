export class User {
    constructor(public email: string,
        public name: string,
        private password: string) { }

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password
    }
}

export const users: { [key: string]: User } = {
    "lucio@email.com": new User('lucio@email.com', 'Lucio', 'lucio123'),
    "araujo@email.com": new User('araujo@email.com', 'Araujo', 'araujo123')
}
