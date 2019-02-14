require('./neuron.js');
class LIF {
    constructor() {
        var _spike = true;
        var _time = 0;
        var restrictionPeriod = 0;
    }
    isFire() {
        let random = (Math.random() + 0.1);
        return random > 0.5;
    }
    coreProcess(neuron, time) {
        den_amount = neuron._dendrites.length;
        this._time = time;
        this._spike = false;
        this. tempDenSum = 0;

        while (_time > 0) {
            logNeuronStatus(neuron, tempDenSum);
            if (_spike) {
                _spike = false;
                tempDenSum = 0;
            }
            if (restrictionPeriod == 0) {

                // decide which Dendrites will fire
                for (var i = 0; i < dendritesAmount; i++) {
                    if (isFire()) {
                        tempDenSum += neuron._dendrites.get(i);
                    }
                }


                tempDenSum -= neuron.getLeak();
                if (tempDenSum < 0) {
                    tempDenSum = 0;
                }
                if (tempDenSum > 100) {
                    tempDenSum = 100;
                }


                // check if there is a spike
                if (tempDenSum >= neuron.getCapacity()) {
                    _spike = true;
                    restrictionPeriod = 4;
                }
            }
            // if spike accrued then we wait the cooling time 
            if (restrictionPeriod > 0) {
                restrictionPeriod--;
            }

            _time--;
            // wait 1 second
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (err) {
                System.err.print("error");;
                e.printStackTrace();
            }
        }


    }


    logNeuronStatus(n, CuurentDendritesSum) {

        if (_time <= 9) {
            console.log(
                "// Time remaining (sec) " + "0" + _time +
                " // Capacity: " + n.getCapacity() +
                " // Dendrites summary: " + CuurentDendritesSum +
                " // Leaked: " + n.getLeak() +
                " // Spike Occurrence State: " + _spike + " //");
        }
        else {
            console.log(
                "// Time remaining (sec) " + _time +
                " // Capacity: " + n.getCapacity() +
                " // Dendrites summary: " + CuurentDendritesSum +
                " // Leaked: " + n.getLeak() +
                " // Spike Occurrence State: " + _spike + " //");
        }

        console.log("\n");
    }

}