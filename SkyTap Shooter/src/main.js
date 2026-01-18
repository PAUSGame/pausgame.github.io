class Main extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        // Load assets di sini jika ada
    }

    create() {
        // Background
        this.cameras.main.setBackgroundColor('#87CEEB');
        
        // Title
        this.add.text(400, 50, 'Main Game Scene', {
            fontSize: '32px',
            fill: '#fff',
            fontStyle: 'bold'
        }).setOrigin(0.5);
        
        // Player (kotak merah)
        this.player = this.add.rectangle(400, 500, 50, 50, 0xff0000);
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);
        
        // Ground (platform hijau)
        this.ground = this.add.rectangle(400, 580, 800, 40, 0x00ff00);
        this.physics.add.existing(this.ground, true);
        
        // Collision
        this.physics.add.collider(this.player, this.ground);
        
        // Controls
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // Score
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '24px',
            fill: '#fff'
        });
        
        // Instructions
        this.add.text(400, 100, 'Arrow Keys = Move | Space = Jump', {
            fontSize: '18px',
            fill: '#fff'
        }).setOrigin(0.5);
    }

    update() {
        // Movement kiri-kanan
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-200);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(200);
        } else {
            this.player.body.setVelocityX(0);
        }
        
        // Jump
        if (this.cursors.space.isDown && this.player.body.touching.down) {
            this.player.body.setVelocityY(-400);
        }
        
        // Update score
        if (this.player.body.touching.down) {
            this.score += 0.1;
            this.scoreText.setText('Score: ' + Math.floor(this.score));
        }
    }
}