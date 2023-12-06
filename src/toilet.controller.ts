import { Controller, Get, Body, Put, Param, Post, Delete, Query } from '@nestjs/common';
import { ToiletService } from './toilet.service';
import { Toilette } from './Toilette';

@Controller('toilettes')
export class ToiletController {
  constructor(private readonly toiletService: ToiletService) {}

  @Get()
  getAllToilettes(): Array<Toilette> {
    return this.toiletService.getAllToilettes();
  }

  @Post()
  create(@Body() createToilet: Toilette) {
    this.toiletService.addToilette(createToilet);
    return this.toiletService.getToilet(createToilet.Id)
  }
  
  @Put(':id')
  updateFavorite(@Param('id') id: string) {
    this.toiletService.updateFavorite(id);
    return this.toiletService.getToilet(id);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    this.toiletService.remove(id);
    return {
      message : "Toilet deleted"
    }
  }
}
