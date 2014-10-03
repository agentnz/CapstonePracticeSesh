#pragma strict

var maxSpeed = 10f;
var facingRight = true;

//var anim : Animator;

var grounded = false;
var groundCheck : Transform;
var groundRadius = 0.2f;
var whatIsGround : LayerMask;
var jumpForce = 700f;

function Start () {
	//anim = GetComponent<Animator>();
}

function FixedUpdate () {
	grounded = Physics2D.OverlapCircle(groundCheck.position, groundRadius, whatIsGround);
	//anim.SetBool("Ground", grounded);
	
	//anim.SetFloat("vSpeed", rigidbody2D.velocity.y);

    var move = Input.GetAxis("Horizontal");
    
    //anim.SetFloat("Speed", Mathf.Abs(move));
    
    rigidbody2D.velocity = new Vector2(move * maxSpeed, rigidbody2D.velocity.y);
    
    if(move > 0 && !facingRight)
    	Flip();
    else if(move < 0 && facingRight)
    	Flip();
}

function Update() {
	if(grounded && Input.GetKeyDown(KeyCode.Space)) {
		//anim.SetBool("Ground", false);
		rigidbody2D.AddForce(new Vector2(0, jumpForce));
	}
}

function Flip () {
	facingRight = !facingRight;
	var theScale = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;	
}