export interface Tache {
    id: number,
    intitule: string,
    description?: string,
    dateCreation: string,
    deadLine?: string,
    dateTermine?: string,
    priorite: "bas" | "moyen" | "haut"
}