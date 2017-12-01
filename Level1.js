//var Game = {};


/*
var game = new Phaser.Game(640,480,Phaser.AUTO,"",{preload: preload, reate: create, update: update})

function preload(){
	game.load.tilemap('map','assets/level1.csv');
	game.load.image('tileset','assets/tileset.png');
}
*/


Game.Level1 = function(game){};

var map;
var layer;

var player;

var controls = {};

var playerSpeed = 150;
var jumpTimer = 0;



Game.Level1.prototype = {
	create:function(){
		this.stage.backgroundColor = '#3A5963';
		this.physics.arcade.gravity.y = 1400;
		map = this.add.tilemap('map',64,64);
		
		map.addTilesetImage('tileset');
		
		layer = map.createLayer(0);
		
		layer.resizeWorld();
		
		map.setCollisionBetween(0,2);
		
		player = this.add.sprite(100,560,'player');
		
		player.anchor.setTo(0.5,0.5);
		
		player.animations.add('idle',[0,1],1,true);
		player.animations.add('jump',[2],1,true);
		player.animations.add('run',[3,4,5,6,7,8],7,true);
		this.physics.archade.enable(player);
		player.body.collideWorldBounds = true;
		
		controls = {
			
			right: this.input.keyboardaddKey(Phaser.Keyboard.D),
			left: this.input.keyboardaddKey(Phaser.Keyboard.A),
			up: this.input.keyboardaddKey(Phaser.Keyboard.W),
		};
		
	},
	
	update:function() {
		
		this.physics.arcade.colide(player,layer);
		
		player.body.velocity.x = 0;
		
		if(controls.up.isDown){
			player.animations.play('jump');
		}
		
		if(controls.right.isDown){
			player.animations.play('run');
			player.scale.setTo(1,1);
			player.body.velocity.x += playerSpeed;
		}
		
		if(controls.left.isDown){
			player.animations.play('run');
			player.scale.setTo(-1,1);
			player.body.velocity.x -= playerSpeed;
		}
		
		if(controls.up.isDown && (player.body.onFlor()) || player.body.touching.down) && this.time.now > jumpTimer)){
			player.body.velocity.y = -600;
			jumpTimer = this.time.now + 750;
		}
		
		
		
		
		
	}
};