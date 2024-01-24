import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffesService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffesService.findOne(id);
  }

  // @Get('flavours')
  // findAll() {
  //   return 'This action returns all coffees';
  // }

  //using res decorator
  // @Get()
  // findAll(@Res response){
  //     response.status(200).send('This is a Res decoartor reponse');
  // }

  // @Get()
  // findAll(@Query() paginationQuery) {
  //   const { limit, offset } = paginationQuery;
  //   return `This action returns all coffee. Limit: ${limit}, offset: ${offset}`;
  // }

  // @Post()
  // create(@Body() body) {
  //   return this.coffesService.create(body);
  // }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffesService.create(createCoffeeDto);
  }

  // @Post()
  // @HttpCode(HttpStatus.GONE)
  // create(@Body() body){
  //     return body;
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body) {
  //   return this.coffesService.update(id, body);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffesService.remove(id);
  }
}
