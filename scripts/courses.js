const courses = [
    {
      code: "CSE 110",
      name: "Introduction to Computer Science",
      completed: false
    },
    {
      code: "WDD 130",
      name: "Web Fundamentals",
      completed: true
    },
    {
      code: "CSE 111",
      name: "Programming Fundamentals",
      completed: true
    },
    {
      code: "CSE 210",
      name: "Object-Oriented Programming",
      completed: false
    },
    {
      code: "WDD 131",
      name: "Client-Side Scripting",
      completed: false
    },
    {
      code: "WDD 231",
      name: "Server-Side Scripting",
      completed: false
    },
    
  ];
  


  function createCourseButtons() {
    const courseList = document.getElementById("course-list");
    const ol = document.createElement("ol");
    
    courses.forEach(course => {
        const button = document.createElement("button");
        button.id = "course";
        button.className = "btn-success btn";
        button.style.display = "inline-flex";
        button.textContent = course.code;

        if (course.completed === true || course.completed === "true") {
            button.className = "btn-info btn"; 
        } else {
            button.className = "btn-success btn";
        }

        button.style.display = "inline-flex";
        button.textContent = course.code;
        
        button.title = `${course.code} - ${course.name} (${course.completed ? 'Completed' : 'In Progress'})`;
        
        ol.appendChild(button);
    });
    
    courseList.innerHTML = ''; 
    courseList.appendChild(ol);
}


function filterCourses(filterBy = "All") {
    const courseButtons = document.querySelectorAll("#course");
    
    courseButtons.forEach(button => {
        if (filterBy === "All") {
            button.style.display = "inline-flex";
        } else {
            button.style.display = button.textContent.trim().startsWith(filterBy) 
                ? "inline-flex" 
                : "none";
        }

    });
}


document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const filterBy = btn.dataset.filter;
        filterCourses(filterBy);
    });
});


createCourseButtons();
filterCourses();
