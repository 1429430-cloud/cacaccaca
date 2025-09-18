controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        7 7 7 . . 7 7 7 . . 7 7 7 . . 7 
        7 7 7 . . 7 7 7 . . 7 7 7 . . 7 
        7 . 7 . . 7 . 7 . . 7 . 7 . . 7 
        4 4 7 4 4 4 4 7 4 4 4 4 7 4 4 4 
        4 4 7 4 4 4 4 7 4 4 4 4 7 4 4 4 
        2 2 7 2 2 2 2 7 2 2 2 2 7 2 2 2 
        2 2 7 2 2 2 2 7 2 2 2 2 7 2 2 2 
        4 4 7 4 4 4 4 7 4 4 4 4 7 4 4 4 
        4 4 7 4 4 4 4 7 4 4 4 4 7 4 4 4 
        7 . 7 . . 7 . 7 . . 7 . 7 . . 7 
        7 7 7 . . 7 7 7 . . 7 7 7 . . 7 
        7 7 7 . . 7 7 7 . . 7 7 7 . . 7 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, vaisseau_de_merde, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 200)
    info.changeLifeBy(-1)
})
let enemy_qui_est_guez: Sprite = null
let projectile: Sprite = null
let vaisseau_de_merde: Sprite = null
vaisseau_de_merde = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 . f 5 5 5 f . . 9 . . . . 
    . . 9 . 5 5 5 5 5 . . 9 . . . . 
    . . 9 . f f f f f . . 9 . . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(vaisseau_de_merde, 200, 200)
vaisseau_de_merde.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    enemy_qui_est_guez = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        9 9 9 . . . . . . . . . . . . . 
        . . 9 9 9 . . . . . . . . . . . 
        9 9 9 . 9 9 . . . . . . . . . . 
        9 9 9 9 . b b b . . . . . . . . 
        . 9 9 . 9 b f b b . . . . . . . 
        . . 9 9 b b b f f b . . . . . . 
        9 . b b b b b b f b f . . . . . 
        9 9 b b b b b b b b b b . . . . 
        . 9 9 b b b b f f f f b . . . . 
        . . . b b b f f b b f f . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy_qui_est_guez.setVelocity(-200, 0)
    enemy_qui_est_guez.setPosition(160, randint(5, 115))
})
