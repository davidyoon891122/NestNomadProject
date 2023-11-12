import { Injectable } from '@nestjs/common';
import { Movie } from 'src/entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    const result = this.movies.some((movie) => movie.id === parseInt(id));
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));

    return result;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
