function changeBackgroundColor(color) {
  document.body.style.background = color;
}

// Form validation
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      //trim
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });

// Image hover effect
var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
  image.src = "";
});
image.addEventListener("mouseout", function () {
  image.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADLCAMAAACbI8UEAAAAkFBMVEX/////ZgAAAAD/9+////3/x6r/3Mb/agD/XQD/WgDw8PDo6Ohzc3NdXV1OTk5hYWF/f3+ampotLS2/v7+3t7eGhob39/ekpKTPz895eXmtra3g4OAyMjLa2toqKipWVlYQEBAaGhqNjY1GRkbT09PFxcVsbGw7OzshISGCgoKLi4v/UAA+Pj6ysrGXl5cXFxcXHZ50AAAEx0lEQVR4nO3a6XabOAAFYJVmZlrhnd2AwTZgw8TO+7/doBXhpDQ9Zwqc+t4fMSgy1me0kRNCEARBEARBEARBkD8qXyfPyzTwl3+mzpe/ppJ/mTjfn1b+DXLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLI5yb/9n3i/DuRnPw9eb5OJEcQBEH+zzir5TpbkKjyCSkzZ+rmjBgab19jmyRWi86sYOrmjBp31f5I6jOxd9kTyg/lkZ6C9RPKr8W92dFnvOfXkFpL8mRyZ9n+uIRkWZKJe3u8j6pq49q6wE7b0HYadmtXFoVBs/GC0jffxk6o40X1zTYvVzaRd4vbX4VFEerSdN9WDIrfyPjlhBdLZq0AFTtzidf+rNk53agq1oLyGnR1tKwbsRey2NOXu6mLkRN7EdWJc5DF+X5U3FA8y8hNlHFPcFGk0qxixayGzY7ut640kpeLdMl53ck3xvuXEyA/SmT1IuiLrqCVO/0qOevktvUY/oWQ+2MxNT7kKF7Wk2HNKFWieiPv8IZ8I9t9dm1qn3gR669KftyWJb+31ono4sShhfpGmTzkRwH1qegk7lCLxsqbtvhed0OUvDoFbIpKM2srqteslHVsKRczc8IOl/qNF1647+Tnjpuyw+uoxI/jmPfA000V8k03kafy1VVGIS+MN7I1mvBSOZ9n6nIxe93JK/DJMyWTR3RkeeLzprKRvjCLdezQrfpyOXHflZx366Os7qgqgR4MRJ7MYPvyytqxVWdr1ZcXut+r0FuVq6H/Tr5V8sB8H1VV+Nd7TXY8V3ayGEc3FN64Up01yvUojyvLyI/lvNtX8k2+qrKyHjOD2d0cl1KQkXfyRjb4LdNz2cfyyLyhWn6xHpONBvxhPiUXC9QhaHerp0/I391zPqSyetNlBuOcj139B6FagXtyMVOJxnrD8sa8oamqsmSv89m0ivAh6L0768n5atyI45/IxUZFLoaBqtL0PmQm4ZKDPBEa1gN6ct4v5ArcDMtTfQUi9zesCt8EqPWc0BFYn0jBWyfXWrH1eCF9uZ8bc0E2LCd8Z57zHbB8SKFqeZPbJZq/zuNJlc8+1iIlfigWH94re/f8qE9CsbkfkG8FNwoaNaF3W0JOD9l6vrbJ9Imtfq58kPbkot3nuycftYbksosbYVWoPM6W8mAOcnLrN1SM55788csZlBtPr3VXpf+A322dpo359J2Ih+yH9dzVv1/ffyYndibrVsSoEubdh1ziMXlD8U+yGyd6za2vu92h21zHbM+eJ007G+SHw5VtVeyc7cGlPGDV9RdVeOddUpXElLd1xMB/W8/khsukzn5fDt4K2/aHfv1RxOg2zuM0ncUA/13xlY4PknzKpoyZ7WJ1VE/ffJqfwfPoOBGLWuUWYSDmtHnsWkZI+LAAPs0tf9wezOAvEOMlXmr36zP9PwSL7dw3G29b/tErGIIgCIIgCIIgCIIgIv8BqRudeTqdIgsAAAAASUVORK5CYII=";
});
