const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Design Login Page",
                description: "Create responsive login page UI.",
                date: "2026-06-15",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Fix Navbar Bug",
                description: "Resolve mobile navigation issue.",
                date: "2026-06-16",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Setup Git Repository",
                description: "Initialize repository and push starter code.",
                date: "2026-06-10",
                category: "Development"
            }
        ]
    },

    {
        id: 2,
        email: "employee2@example.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Dashboard",
                description: "Develop dashboard layout and widgets.",
                date: "2026-06-18",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Write API Docs",
                description: "Document authentication endpoints.",
                date: "2026-06-12",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Database Migration",
                description: "Migrate old user records.",
                date: "2026-06-08",
                category: "Backend"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Unit Testing",
                description: "Write tests for dashboard components.",
                date: "2026-06-20",
                category: "Testing"
            }
        ]
    },

    {
        id: 3,
        email: "employee3@example.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "SEO Optimization",
                description: "Improve website metadata and performance.",
                date: "2026-06-17",
                category: "Marketing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Landing Page Review",
                description: "Review UI and UX improvements.",
                date: "2026-06-11",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Analytics Setup",
                description: "Integrate analytics tracking.",
                date: "2026-06-21",
                category: "Marketing"
            }
        ]
    },

    {
        id: 4,
        email: "employee4@example.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Customer Support Panel",
                description: "Build support ticket management UI.",
                date: "2026-06-19",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Bug Investigation",
                description: "Analyze reported production bug.",
                date: "2026-06-13",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Server Upgrade",
                description: "Upgrade staging server resources.",
                date: "2026-06-09",
                category: "DevOps"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Performance Audit",
                description: "Measure application load times.",
                date: "2026-06-22",
                category: "Testing"
            }
        ]
    },

    {
        id: 5,
        email: "employee5@example.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Prepare Presentation",
                description: "Create slides for project demo.",
                date: "2026-06-20",
                category: "Management"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Client Meeting",
                description: "Discuss project requirements.",
                date: "2026-06-14",
                category: "Communication"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Sprint Planning",
                description: "Plan tasks for next sprint.",
                date: "2026-06-23",
                category: "Management"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Vendor Coordination",
                description: "Coordinate with third-party vendor.",
                date: "2026-06-07",
                category: "Operations"
            }
        ]
    }
];

const admin = [
    {

        "id": 1,
        "email": "admin@example.com",
        "password": "12345"

    }
]


export const setData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getData = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin }
}