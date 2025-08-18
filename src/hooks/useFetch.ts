interface Params<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

const useFetch = <T>(url: string): Params<T> => {
    
}