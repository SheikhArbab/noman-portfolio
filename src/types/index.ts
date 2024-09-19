



export interface User {
    _id: string;
    email: string;
    avatar: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}



export interface UserInitialState {
    user: User | null;
    token: any;
}


export interface UserState {
    auth: UserInitialState;
    toggle: {
        value: boolean
    }
}

