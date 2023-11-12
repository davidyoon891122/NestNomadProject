import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export default class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('title') title: string) {
    return `We are searching for a movie with a title: ${title}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `This will return one movie with the id: ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  deleteMove(@Param('id') id: string) {
    return `This will delete a movie with the id: ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updateId: id,
      ...updateData,
    };
  }
}
