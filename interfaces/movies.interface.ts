export interface Movies {
    total_pages: number;
    total_results: number;
    results: Results[];
}

interface Results {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    release_date: string;
}