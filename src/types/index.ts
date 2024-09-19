



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
        value: boolean;
    }
}

export interface projectData {
    _id: string;
    img: string;
    title: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}