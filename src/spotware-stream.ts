import {Transform} from "stream"
export class SpotwareTransform extends       Transform {
    constructor() {
        super({
            allowHalfOpen: false, readableObjectMode:      false, writableObjectMode: true});
    }
}
