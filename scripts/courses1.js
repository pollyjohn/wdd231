// Course List Array
const courses = [
    {
      code: "CSE 110",
      name: "Introduction to Computer Science",
      completed: true
    },
    {
      code: "WDD 130",
      name: "Web Fundamentals",
      completed: false
    },
    {
      code: "CSE 111",
      name: "Programming Fundamentals",
      completed: true
    },
    {
      code: "CSE 210",
      name: "Object-Oriented Programming",
      completed: true
    },
    {
      code: "WDD 131",
      name: "Client-Side Scripting",
      completed: true
    },
    {
      code: "WDD 231",
      name: "Server-Side Scripting",
      completed: false
    }
  ];
  
  // Function to display courses
  function displayCourses(filterBy = "All") {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";
  
    const filteredCourses = filterBy === "All"
      ? courses
      : courses.filter(course => course.code.startsWith(filterBy));
  
    filteredCourses.forEach(course => {
      const courseItem = document.createElement("div");
      courseItem.classList.add("course-item");
  
      const courseCode = document.createElement("div");
      courseCode.classList.add("course-code", course.completed ? "completed" : "");
      courseCode.textContent = course.code;
  
      const courseName = document.createElement("div");
      courseName.classList.add("course-name", course.completed ? "completed" : "");
      courseName.textContent = course.name;
  
      courseItem.appendChild(courseCode);
      courseItem.appendChild(courseName);
      courseList.appendChild(courseItem);
    });
  }
    document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const filterBy = btn.dataset.filter;
      displayCourses(filterBy);
    });
  });


  
displayCourses();