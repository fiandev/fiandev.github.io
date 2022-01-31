const canvas = document.querySelector("#canvas"),
c = canvas.getContext("2d"),
score_result = document.querySelector("#score");
canvas.width = innerWidth;
canvas.height = innerHeight;


class Player {
  constructor(x,y,radius,color) {
    this.x = x,
    this.y = y,
    this.radius = radius,
    this.color = color
  }
  
  draw() {
    c.beginPath()
    c.arc(this.x , this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }
}

class Projectile {
  constructor(x , y, radius, color, velocity) {
    this.x = x,
    this.y = y,
    this.radius = radius,
    this.color = color,
    this.velocity = velocity
  }
  draw() {
    c.beginPath()
    c.arc(this.x , this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }
  
  update() {
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}

class Enemy {
  constructor(x , y, radius, color, velocity, point) {
    this.x = x,
    this.y = y,
    this.radius = radius,
    this.color = color,
    this.velocity = velocity,
    this.point = point
  }
  draw() {
    c.beginPath()
    c.arc(this.x , this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }
  
  update() {
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}

const x = canvas.width / 2
const y = canvas.height / 2
const player = new Player(x,y,10,"white")

/*
const projectile = new Projectile(
     canvas.width / 2,
     canvas.height / 2,
     5,
     "red",
     {
       x: 1,
       y: 1
     }
  )
  */
  
const projectiles = []
const enemies = []
let animationId, score = 0
addEventListener("click", (event) => {
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
    )
  //const speed = Math.floor(Math.random() * (6 - 4) + 4)
  const speed = 5
  const rad = Math.floor(Math.random() * (15 - 5) + 5)
  const velocity = {
    x: Math.cos(angle) * speed,
    y: Math.sin(angle) * speed
  }
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`
  projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, rad, color, velocity)
  )
  
})

function spawnEnemies() {
  let cdSpawn = Math.floor(Math.random() * (1500 - 100) + 100)
  //console.log(cdSpawn)
  setTimeout(() => {
    const radius = Math.random() * (30 - 4) + 4
    let x,y
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
      y = Math.random() * canvas.height
    } else {
      x = Math.random() * canvas.width
      y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
    }
    const color = `hsl(${Math.random() * 360}, 50%, 50%)`
    const angle = Math.atan2(
    canvas.height / 2 - y,
    canvas.width / 2 - x
    )
    const speed = Math.floor(Math.random() * (6 - 3) + 3)
    const velocity = {
     x: Math.cos(angle) * speed,
     y: Math.sin(angle) * speed
    }
    const point = Math.floor(Math.random() * (3 - 1) + 1)
    enemies.push(new Enemy(x,y,radius,color,velocity, point))
    spawnEnemies();
  },1000)
}
function animate(){
  score_result.innerHTML = score;
  animationId = requestAnimationFrame(animate)
  c.fillStyle = "rgba(0, 0, 0, 0.1)"
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.draw()
  projectiles.forEach((projectile,index) => {
    projectile.update()
    /* clear projectiles edges screen */
    if (
    projectile.x + projectile.radius < 0 ||
    projectile.x - projectile.radius > canvas.width ||
    projectile.y + projectile.radius < 0 ||
    projectile.y - projectile.radius > canvas.height
    ) {
      setTimeout(() => {
         projectiles.splice(index, 1)
        },0)
    }
  })
  enemies.forEach((enemy, index) => {
    enemy.update()
    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
    /* game over */
    if (dist - enemy.radius - player.radius < 1) {
      //console.log(`game over !`);
     /* var audio = new Audio()
          audio.src = "uh.mp3"
          audio.play()
          */
      cancelAnimationFrame(animationId)
      score_result.innerHTML = `${score} | Game Over!`;
      
    }
    projectiles.forEach((projectile, projectileIndex) => {
    const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
    /* object touch */
      if (dist - enemy.radius - projectile.radius < 1) {
        /*
        var audio = new Audio()
        audio.src = "point.mp3"
        audio.play()
        */
        setTimeout(() => {
          score += enemy.point
          console.log(`(+) = ${enemy.point} score`)
          enemies.splice(index, 1)
          projectiles.splice(projectileIndex, 1)
        },0)
      }
    });
  })
}
function play_audio(url) {
     return new Promise(function(resolve, reject) {   // return a promise
         var audio = new Audio();                     // create audio wo/ src
         audio.preload = "auto";                      // intend to play through
         audio.autoplay = true;                       // autoplay when loaded
         audio.onerror = reject;                      // on error, reject
         audio.onended = resolve;                     // when done, resolve

         audio.src = url; // just for example
     });
}
animate()
spawnEnemies()