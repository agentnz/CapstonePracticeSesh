#pragma strict

var maxSpeed = 10f;
var facingRight = true;

function Start () {

}

function FixedUpdate () {
    var move = Input.GetAxis("Horizontal");
    rigidbody2D.velocity = new Vector2(move * maxSpeed, rigidbody2D.velocity.y);
    if(move > 0 && !facingRight)
    	Flip();
    else if(move < 0 && facingRight)
    	Flip();
}

function Flip () {
	facingRight = !facingRight;
	var theScale = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	
}