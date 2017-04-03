import { Account } from './account.model';

export class User {
    username: string;
    avatar: string;
    person: {
        address: string,
        address2: string,
        city: string,
        email: string,
        first_name: string,
        gender: string,
        last_name: string,
        middle_name: string,
        phone: string,
        state: string,
        suffix: string,
        zip: number,
    };
    user_accounts: Account[];
}
