import { Double, Int32 } from "mongodb";

export class Movie {
    '_id': string;
    'Const': string;
    'Created': string;
    'Modified': string;
    'Description': string;
    'Title': string;
    'URL': string;
    'TitleType': string;
    'IMDbRating': Double;
    'Runtime': Int32;
    'Year': Int32;
    'Genres': string;
    'NumVotes': Int32;
    'ReleaseDate': string;
    'Directors': string;
    'YourRating': Double;
    'DateRated': string;
    'Poster': string;
}