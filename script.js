document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const resetButton = document.getElementById('resetButton');
    const bounceCountDisplay = document.getElementById('bounceCount');
  
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let dx = 2; 
    let dy = -2; 
    let ballRadius = 10;
    let bounceCount = 0;
  
    function drawBall() {
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
  
      ballX += dx;
      ballY += dy;
  
      if(ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) {
        dx = -dx;
        bounceCount++;
        bounceCountDisplay.textContent = bounceCount;
      }
      if(ballY + dy > canvas.height - ballRadius || ballY + dy < ballRadius) {
        dy = -dy;
        bounceCount++;
        bounceCountDisplay.textContent = bounceCount;
      }
  
      requestAnimationFrame(draw);
    }
  
    canvas.addEventListener('click', function(event) {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      ballX = clickX;
      ballY = clickY;
      bounceCount = 0;
      bounceCountDisplay.textContent = bounceCount;
    });
  
    resetButton.addEventListener('click', function() {
      bounceCount = 0;
      bounceCountDisplay.textContent = bounceCount;
    });
  
    draw();
  });
  