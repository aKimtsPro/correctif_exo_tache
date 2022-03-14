import { AbstractControl, ValidationErrors, Validators as V } from "@angular/forms"


export interface TacheForm {
    intitule: string,
    description?: string,
    deadLine?: Date,
    priorite: 'bas' | 'moyen' | 'haut'
}


export const TACHE_FORM = {
    intitule: ['', [V.required, V.minLength(2), V.maxLength(20)]],
    description: [null, [V.maxLength(500)]],
    deadLine: [null, [isFuture]],
    priorite: ['moyen', [V.required, priority]]
}

function priority(control: AbstractControl): ValidationErrors | null {
    const v = control.value
    
    if(v === 'bas' || v === 'moyen' || v === 'haut')
        return null;

    return {
        priority: {
            actual: v,
            acceptable: ['bas','moyen','haut']
        }
    }
}

function isFuture(control: AbstractControl): ValidationErrors | null {

    if( !control.value )
        return null;

    const now = new Date();
    const date = new Date(control.value);

    if(  date > now )
        return null;

    return {
        isFuture: {
            message: "la date devrait être future",
            date_actuelle: now,
            date_fournie: date
        }
    }
}