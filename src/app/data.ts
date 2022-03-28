import { colorModel } from "./info-block.model";

export class dataColor {

    public data: colorModel[] = [];

    constructor(){

        this.data.push(new colorModel('красный' ,  'red'));
        this.data.push(new colorModel('зеленый' ,  'green'));
        this.data.push(new colorModel('синий' , 'blue'));
        this.data.push(new colorModel('желтый' , 'yellow'));
        this.data.push(new colorModel('оранжевый' , 'orange'));
        this.data.push(new colorModel('фиолетовый' , 'purple'));
        this.data.push(new colorModel('серый' , 'grey'));
        this.data.push(new colorModel('черный' , 'black'));
        this.data.push(new colorModel('розовый' , 'pink'));

    }
}