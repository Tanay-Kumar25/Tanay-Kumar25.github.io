const container = document.querySelector('.container');

// Function to dynamically rotate the container for an enhanced 3D effect based on mouse position
const rotateContainerDynamically = (event) => {
  // Get container dimensions and position
  const { left, top, width, height } = container.getBoundingClientRect();
  
  // Calculate mouse position relative to the container
  const mouseX = event.clientX - left;
  const mouseY = event.clientY - top;
  
  // Calculate distance to the closest edge
  const dx = Math.min(mouseX, width - mouseX);
  const dy = Math.min(mouseY, height - mouseY);
  
  // Adjust sensitivity based on distance to the nearest edge
  // Lower values mean more sensitivity. Adjusting to a lower value for more pronounced bending
  const sensitivity = 15; // Reduced for greater sensitivity

  // Enhanced calculations for rotation to increase effect towards the edges and corners
  // Multiplying by a factor based on distance to edges (dy for rotateX, dx for rotateY) enhances the effect
  const rotateX = ((height / 2 - mouseY) / sensitivity) * (dy / (height / 8));
  const rotateY = ((mouseX - width / 2) / sensitivity) * (dx / (width / 8));

  // Apply rotation for the 3D bending effect
  container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

container.addEventListener('mousemove', rotateContainerDynamically);
