ig.module(
'game.entities.item'
)
.requires(
'impact.entity'
)
.defines(function() {

EntityItem = ig.Entity.extend({
    size: {x:16, y: 16},
    flip: false,
    gravityFactor: 0,
    // allow collision detection with other entities
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    animSheet: new ig.AnimationSheet('media/item.png', 16, 16),
    init: function(x, y){
        this.parent(x, y);
        this.addAnim('spin', 0.1, [0,1,2,3]);
        },
        check: function(other){
            this.kill();
            ig.game.spawnEntity(EntityFedback, this.pos.x, this.pos.y);
            // add to the score on top
            ig.game.score_points += 1;
            // score summary
            ig.game.stats.score_points ++;
            }
});
EntityFedback = ig.Entity.extend({
    size: {x:16, y: 16},
    flip: false,
    gravityFactor: 0,
    animSheet: new ig.AnimationSheet('media/feedback.png', 16, 16),
    init: function(x, y){
        this.parent(x, y);
        this.addAnim('feedback', 0.1, [0,1,2,3]);
        this.killTimer = new ig.Timer();
        },
        update: function(){
        this.parent();
        // destroy after a second
        if(this.killTimer.delta() > 0.5){
        this.kill();
        }
        },
});
});