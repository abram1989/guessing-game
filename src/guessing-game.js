class GuessingGame {
    constructor() {}

    setRange(min, max) 
		{
        this.min=min;
		this.max=max;	
        
		}

    guess()  {
		if (this.min == this.max) {
			return this.min;
		}
			else {
				return Math.ceil(this.min + (this.max - this.min) / 2);
				}
      
    }

    lower() {
		 this.max = this.guess();
		
    }

    greater() {
		this.min= this.guess();
		

    }
}

module.exports = GuessingGame;
