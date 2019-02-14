

class Neuron {
    constructor(cap, den, leak) {
        this._capacity = cap;
        this._leak = leak;
        this._dendrites = new Array();
        den.forEach(element => {
            this._dendrites.push(element);
        });
    }
    getDenSum(_dendrites) {
        let sum = 0;
        _dendrites.forEach(element => {
            sum += element;

        });
        return sum;
    };

}
var _spike = true;
var _time = 0;
var restrictionPeriod = 0;

function isFire() {
    let random = (Math.random() + 0.1);
    return random > 0.5;
}
function logNeuronStatus(n, CuurentDendritesSum) {

    if (_time <= 9) {
        console.log(
            "// Time remaining (sec) " + "0" + _time +
            " // Capacity: " + n._capacity +
            " // Dendrites summary: " + CuurentDendritesSum +
            " // Leaked: " + n._leak +
            " // Spike Occurrence State: " + _spike + " //");
    }
    else {
        console.log(
            "// Time remaining (sec) " + this._time +
            " // Capacity: " + n._capacity +
            " // Dendrites summary: " + CuurentDendritesSum +
            " // Leaked: " + n._leak +
            " // Spike Occurrence State: " + _spike + " //");
    }

    console.log("\n");
}


function coreProcess(time, neuron) {
    let den_amount = neuron._dendrites.length,
        _time = time,
        _spike = false,
        tempDenSum = 0;
        
        setTimeout(function(){
            while (_time > 0) {
        
            logNeuronStatus(neuron, tempDenSum);
            if (_spike) {
                _spike = false;
                tempDenSum = 0;
            }
            if (restrictionPeriod == 0) {
                for (var i = 0; i < den_amount; i++) {
                    if (isFire()) {
                        tempDenSum += neuron._dendrites[i];
                    }
                }
                tempDenSum -= neuron._leak;
                if (tempDenSum < 0)
                    tempDenSum = 0;

                if (tempDenSum > 100)
                    tempDenSum = 100;

                if (tempDenSum >= neuron._capacity) {
                    _spike = true;
                    restrictionPeriod = 4;
                }
            }
            if (restrictionPeriod > 0) {
                restrictionPeriod--;
            }

            _time--;
            
            setTimeout(function(){}, 1000);
            
           
        }
    }, 1000);

    }
    

let dendritesVector = new Array();
dendritesVector.push(37);
dendritesVector.push(42);
dendritesVector.push(13);

let countdownTimer = 20,
    leak = 30,
    capacity = 100;

let neu = new Neuron(capacity, dendritesVector, leak);

coreProcess(countdownTimer, neu);
console.log("start");









