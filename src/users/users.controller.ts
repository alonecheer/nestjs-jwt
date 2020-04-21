import { Controller, Request, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get('/')
    getAllUser() {
        return this.usersService.findAll();
    }
    
}