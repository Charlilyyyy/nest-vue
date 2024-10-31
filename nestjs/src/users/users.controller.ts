import { Controller, Get } from '@nestjs/common';

interface UserInterface {
    id: number;
    name: string;
}

@Controller('users') // this line specify where the web will pass the data route
export class UserController {
    
    private users: UserInterface[] = [
        {id: 1, name: "Barack"},
        {id: 2, name: "Hailey"},
    ];

    @Get()
    getAllUsers(): UserInterface[] {
        return this.users;
    }
}
