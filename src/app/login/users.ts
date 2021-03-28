export class Users{
    email: string;
    id: number;
    name: string;
    password: string;

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

}