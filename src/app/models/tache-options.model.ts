export interface FilterOptions {
    termine?: boolean,
    deadline?: boolean,
    termineAvant?: Date,
    deadlineAvant?: Date,
    intituleIncludes?: string,
    hasDescription?: string,
    priorite?: 'bas' | 'moyen' | 'haut',
    prioriteHigherThan?: 'bas' | 'moyen' | 'haut',
}

export interface SortOptions {
    sortBy?: 'priorite' | 'dateCreation' | 'deadLine';
    asc?: boolean
}