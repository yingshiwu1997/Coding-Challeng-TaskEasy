class Time {
    constructor(time) {
        this.hour = parseInt(time.split(':', 1));
        this.minute = parseInt(time.split(':', 2)[1].split(' ', 1))/10;
        if(this.minute == 3) this.hour += 0.5; 
        this.am_pm = time.split(':', 2)[1].split(' ', 2)[1];
        if(this.am_pm == 'PM' && this.hour != 12) this.hour += 12; 
        this.stringTime = time;
    }

    addTime(){
        this.hour += 0.5;
    }

    toString(){
        Number.isInteger(this.hour)? this.minute = 0: this.minute = 3;
        let hora = Math.trunc(this.hour);
        let format = '';
        if(hora > 12){
            hora = hora - 12;
            format = 'PM';
        }else {
            format = 'AM';
        }
        return ('' + hora + ':' + this.minute + '0 ' + format);
    }
}

exports.Time = Time;