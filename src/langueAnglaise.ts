import {LangueInterface} from "./langue.interface";
import {Expressions} from "./expressions";

export class LangueAnglaise implements LangueInterface {
    public Saluer(): string {
        return Expressions.HELLO;
    }

    public Féliciter(): string {
        return Expressions.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}