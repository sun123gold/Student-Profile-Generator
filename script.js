const students = [
    {
      firstName: "Rejoice",
      lastName: "Amos",
      age: 19,
      score: 95,
      courses: ["Mathematics","Physics", "Chemistry"]
    },
    {
      firstName: "Victor",
      lastName: "Okoli",
      age: 22,
      score: 90,
      courses: ["Computer Science", "Accounting", "History"]
    },
    {
      firstName: "Patrick",
      lastName: "Chukwuemeka",
      age: 20,
      score: 85,
      courses: ["Physics","Chemistry", "Statsitcs"]
    },
    {
      firstName: "Hadiza",
      lastName: "Onzie",
      age: 18,
      score: 80,
      courses: ["Geography", "Agric Science", "Civic Education"]
    },
    {
      firstName: "Golden",
      lastName: "Sunday",
      age: 24,
      score: 89,
      courses: ["Renewable Energy", "Electrical Machines", "Power System Analysis"]
    }
  ];
  
  // Destructuring & map to create description strings
  const studentDescriptions = students.map(({ firstName, lastName, age, score, courses }) => {
    return `${firstName} ${lastName} is ${age} years old and scored ${score}. They are taking: ${courses.join(", ")}`;
  });
  
  // forEach to log details
  studentDescriptions.forEach(description => {
    console.log(description);
  });
  
  // Displaying on HTML (if element exists)
  const container = document.getElementById("student-list");
  if (container) {
    students.forEach(({ firstName, lastName, age, score, courses }) => {
      const card = document.createElement("div");
      card.className = "student-card";
      card.innerHTML = `
        <div class="student-name">${firstName} ${lastName}</div>
        <div class="student-info">Age: ${age}</div>
        <div class="student-info">Score: ${score}</div>
        <div class="student-info">Courses: ${courses.join(", ")}</div>
      `;
      container.appendChild(card);
    });
  }