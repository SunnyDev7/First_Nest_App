import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Irish brew',
            brand: 'CCD',
            flavours: ['chocolate', 'vanilla'],
        },
        {
            id: 2,
            name: 'Belgium Cappucino',
            brand: 'Starbucks',
            flavours: ['chocolate', 'vanilla'],
        },
    ];

    findAll(){
        return this.coffees;
    }

    findOne(id: String){
        const coffee = this.coffees.find(item => item.id === +id);
        if(!coffee){
            // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
            //update
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if(coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}

