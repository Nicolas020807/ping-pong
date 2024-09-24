class Player {
    constructor(c, keyboard) {
        this.c = c;
        this.keyboard = keyboard;
        this.x = 0;
        this.y = 350;
        this.vel = 5;
        this.gravidade = 7;
        this.teste = 0;
        this.Player = new Image();
        this.Player.src = "assets/Player.png"
        this.Player.addEventListener('load', () => {
            this.draw()
        })
        this.Player.width = 100;
        this.Player.height = 100;
    }

    management() {
        if (this.keyboard.esquerda)
            if (this.x > 0)
                this.x -= this.vel;
        if (this.keyboard.direita)
            if (this.x < this.c.canvas.width - this.Player.width) { this.x += this.vel; }
        if (this.keyboard.cima)
           
            if (this.y > 0)
                this.y -= this.vel;
        if (this.keyboard.cima == false)
            if (this.y < this.c.canvas.height - this.Player.height - 106) { this.y += this.gravidade; }
    }
    draw() {
        this.management();
        this.c.drawImage(this.Player, this.x, this.y, this.Player.width, this.Player.height)
        LoadMap()
    }



}


BlocoMiddle= new Image()
BlocoMiddle.src = "assets/Blocos/BlocoMeio.png"


function LoadMap(){
                   for (Blocox = 0; Blocox<=800; Blocox+=100) 
                    {c.drawImage(BlocoMiddle,Blocox,500,100,100);}

}