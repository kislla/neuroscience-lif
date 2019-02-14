class Neuron   {
    constructor(cap, den, leak){
        this._capacity = cap; 
        this._leak = leak;
        this._dendrites = new Array();
        den.forEach(element => {
            this._dendrites.push(element);
        });
    }
     getDenSum(_dendrites) {
        let sum=0;
        _dendrites.forEach(element => {
            sum+=element;
            
        });
        return sum;
    };

}