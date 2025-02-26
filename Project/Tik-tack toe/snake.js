class Snake{
    constructor(x,y,length,width,dx,dy){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.length = length;
        this.width = width;
        // this.forward = false;
        // this.backward = false;
        // this.left = false;
        // this.right = false;
    }
    draw(){
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,this.length,this.width);
        ctx.stroke();
    }
    controls(){
        document.onkeydown = (event)=>{
            switch(event.key){
                case "ArrowRight":
                    this.sigh = "Right"
                    this.right = true;
                    this.left = false;
                    this.forward = false;
                    this.backward = false;  
                    break;           
                case "ArrowLeft":
                    this.sigh = "Left"
                    this.right = false;
                    this.left = true;
                    this.forward = false;
                    this.backward = false;
                    break;             
                case "ArrowUp":
                    this.sigh = "Up"
                    this.right = false;
                    this.left = false;
                    this.forward = true;
                    this.backward = false;  
                    break;                        
                case "ArrowDown":
                    this.sigh = "Down"
                    this.right = false;
                    this.left = false;
                    this.forward = false;
                    this.backward = true;   
                    break;                       
            }
        }
        
    }
    update(){
        if(this.right == true){
            this.x += this.dx;
        }
        if(this.left == true){
            this.x -= this.dx;
        }
        if(this.forward == true){
            this.y -= this.dy;
        }
        if(this.backward == true){
            this.y += this.dy;
        }
    }
} 