interface UserNameDTO {
    title?: string;
    first?: string;
    last?: string;
}

export interface UserDTO {
    id: any;
    name?: UserNameDTO;
    location?: any;
    phone?: string;
    picture?: any;
    email: string;
}