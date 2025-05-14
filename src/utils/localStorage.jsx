const employee = [
  {
    id: 1,
    firstName: "Somi_Thobar",
    email: "s@s.com",
    password: "123",
    tasks: [
      {
        id: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Moble me snnapchat kholo",
        taskDescription: "Compile and analyze sales data for Q1.",
        taskDate: "2025-05-01",
        category: "Reporting"
      },
      {
        id: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CRM Entries",
        taskDescription: "Ensure all customer records are up to date.",
        taskDate: "2025-04-15",
        category: "Data Management"
      },
      {
        id: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Follow-up",
        taskDescription: "Follow up with clients for feedback.",
        taskDate: "2025-04-10",
        category: "Communication"
      }
    ],
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 }
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        id: 4,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a new design for the landing page.",
        taskDate: "2025-05-03",
        category: "Design"
      },
      {
        id: 5,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve issues with the user login flow.",
        taskDate: "2025-04-20",
        category: "Development"
      },
      {
        id: 6,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Ensure payment gateway integration is functional.",
        taskDate: "2025-04-25",
        category: "QA"
      }
    ],
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        id: 7,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Weekly sync with the product team.",
        taskDate: "2025-05-06",
        category: "Management"
      },
      {
        id: 8,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document the new API endpoints.",
        taskDate: "2025-04-18",
        category: "Documentation"
      },
      {
        id: 9,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Survey Analysis",
        taskDescription: "Analyze feedback from the user satisfaction survey.",
        taskDate: "2025-05-02",
        category: "Research"
      }
    ],
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        id: 10,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create admin dashboard for metrics.",
        taskDate: "2025-05-04",
        category: "Development"
      },
      {
        id: 11,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Release",
        taskDescription: "Deploy version 2.1.0 to production.",
        taskDate: "2025-04-22",
        category: "DevOps"
      }
    ],
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        id: 12,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Social Media Plan",
        taskDescription: "Draft marketing content calendar.",
        taskDate: "2025-05-05",
        category: "Marketing"
      },
      {
        id: 13,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct Webinar",
        taskDescription: "Host a webinar on product features.",
        taskDate: "2025-04-27",
        category: "Outreach"
      },
      {
        id: 14,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "SEO Audit",
        taskDescription: "Audit the site for SEO performance.",
        taskDate: "2025-04-30",
        category: "SEO"
      }
    ],
    taskCount: { active: 2, newTask: 2, completed: 1, failed: 1 }
  }
];



const admin = 
  {
    firstName:"Anjani putra Somi_Hanuman!!",
    id: 100,
    email: "somi@ex.com",
    password: "123"
  }
;

export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employee));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  try {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || null;
    return { employees, admin };
  } catch (error) {
    console.error("Error parsing localStorage:", error);
    return { employees: [], admin: null };
  }
};


