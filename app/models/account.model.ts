

export class Account {
    name: string;
    body: string;
    status: number;
    user: {
        id: number;
        username: string;
    }
    account_type: {
        id: number;
        name: string;
        body: string;
    }
}
