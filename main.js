// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// Step 2: Validate the course and assignment group inputs.
function validateCourseAndGroup(course, assignmentGroup) {
  // Check that course and assignmentGroup are provided.
  if (!course || !assignmentGroup) {
    throw new Error("Course and assignment group are required.");
  }

  // Check that the assignment group belongs to the given course.
  if (assignmentGroup.course_id !== course.id) {
    throw new Error("AssignmentGroup.course_id does not match CourseInfo.id");
  }

  // Check that assignments is a non-empty array.
  if (
    !Array.isArray(assignmentGroup.assignments) ||
    assignmentGroup.assignments.length === 0
  ) {
    throw new Error("AssignmentGroup.assignments must be a non-empty array.");
  }
}

// Step 3: Build a map of assignments with parsed dates and due status.
function buildAssignmentsMap(assignmentGroup, now) {
  const assignmentsById = {};

  // Use a simple for loop to go through each assignment.
  for (let i = 0; i < assignmentGroup.assignments.length; i++) {
    const assignment = assignmentGroup.assignments[i];

    const id = Number(assignment.id);
    const possible = Number(assignment.points_possible);
    const dueDate = new Date(assignment.due_at);

    // Validate points_possible as required.
    if (!Number.isFinite(possible) || possible <= 0) {
      throw new Error("Invalid points_possible for assignment " + assignment.id);
    }

    // Validate the due date.
    if (Number.isNaN(dueDate.getTime())) {
      throw new Error("Invalid due_at date for assignment " + assignment.id);
    }

    // An assignment is due if its due date is today or in the past.
    const isDue = dueDate <= now;

    // Store parsed info in the map.
    assignmentsById[id] = {
      id: id,
      pointsPossible: possible,
      dueDate: dueDate,
      isDue: isDue,
    };
  }

  return assignmentsById;
}

// Placeholder getLearnerData: returns empty array to avoid errors.
function getLearnerData(course, assignmentGroup, submissions) {
  // Step 2: run basic validation on course and assignment group.
  validateCourseAndGroup(course, assignmentGroup);

  // Step 3: build assignments map using the current time.
  const now = new Date();
  const assignmentsById = buildAssignmentsMap(assignmentGroup, now);

  // For now we just log the map so you can see it while we build the rest.
  console.log("Assignments map:", assignmentsById);

  return [];
}

// Step 1: Wrap getLearnerData call in try/catch
try {
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);
} catch (error) {
  console.error("Error computing learner data:", error.message);
}