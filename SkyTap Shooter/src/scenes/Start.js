class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'Start' });
    }

    preload() {
        // Load assets untuk menu jika ada
        // Contoh: this.load.image('logo', 'assets/logo.png');
    }

    create() {
        // Background
        this.cameras.main.setBackgroundColor('#1a1a2e');
        
        // Title
        this.add.text(400, 150, 'MY GAME', {
            fontSize: '64px',
            fill: '#fff',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: 6
        }).setOrigin(0.5);
        
        // Subtitle
        this.add.text(400, 230, 'Phaser Game', {
            fontSize: '24px',
            fill: '#aaa'
        }).setOrigin(0.5);
        
        // Start button
        const startButton = this.add.text(400, 350, 'START GAME', {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#16213e',
            padding: { x: 40, y: 20 },
            borderRadius: 10
        }).setOrigin(0.5);
        
        // Make button interactive
        startButton.setInteractive({ useHandCursor: true });
        
        // Button hover effect
        startButton.on('pointerover', () => {
            startButton.setStyle({
                fill: '#fff',
                backgroundColor: '#0f3460'
            });
        });
        
        startButton.on('pointerout', () => {
            startButton.setStyle({
                fill: '#fff',
                backgroundColor: '#16213e'
            });
        });
        
        // Start game when clicked
        startButton.on('pointerdown', () => {
            this.scene.start('Main');
        });
        
        // Instructions
        this.add.text(400, 450, 'How to Play:', {
            fontSize: '20px',
            fill: '#fff',
            fontStyle: 'bold'
        }).setOrigin(0.5);
        
        this.add.text(400, 490, '← → Arrow Keys: Move', {
            fontSize: '16px',
            fill: '#ccc'
        }).setOrigin(0.5);
        
        this.add.text(400, 520, 'SPACE: Jump', {
            fontSize: '16px',
            fill: '#ccc'
        }).setOrigin(0.5);
        
        // Press any key to start (alternative)
        this.add.text(400, 570, 'or Press ANY KEY to Start', {
            fontSize: '14px',
            fill: '#888',
            fontStyle: 'italic'
        }).setOrigin(0.5);
        
        // Start with any key press
        this.input.keyboard.on('keydown', () => {
            this.scene.start('Main');
        });
        
        // Add credits/version
        this.add.text(400, 590, 'v1.0', {
            fontSize: '12px',
            fill: '#555'
        }).setOrigin(0.5);
    }

    update() {
        // Bisa tambahkan animasi atau efek di menu
    }
}