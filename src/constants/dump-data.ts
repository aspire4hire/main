import { JobPostingProps } from '@/components/Feed/JobPosting/JobPosting.types'
import { Job } from '@/features/jobs'

export const JOBS_DUMMY: any[] = [
  {
    date: new Date('2023-12-01'),
    description:
      'Installation of solar panels on a residential rooftop, including mounting, wiring, and inverter setup.',
    skills: [
      'Solar Panel Installation',
      'Electrical Wiring',
      'Safety Protocols'
    ],
    title: 'Residential Solar Installation',
    user: {
      name: 'Avery Johnson'
    }
  },
  {
    date: new Date('2024-01-15'),
    description:
      'Repair and maintenance of industrial HVAC systems, ensuring optimal performance and energy efficiency.',
    skills: ['HVAC Maintenance', 'Troubleshooting', 'Mechanical Repair'],
    title: 'Industrial HVAC Maintenance',
    user: {
      name: 'Taylor Smith'
    }
  },
  {
    date: new Date('2024-02-10'),
    description:
      'Design and installation of a modern kitchen lighting system, including recessed and under-cabinet lighting.',
    skills: ['Lighting Design', 'Electrical Planning', 'Fixture Installation'],
    title: 'Modern Kitchen Lighting',
    user: {
      name: 'Morgan Lee'
    }
  },
  {
    date: new Date('2024-03-05'),
    description:
      'Upgrading an office building to a smart energy management system, integrating IoT devices and software solutions.',
    skills: [
      'Smart System Integration',
      'IoT Device Setup',
      'Energy Efficiency Solutions'
    ],
    title: 'Smart Office Energy Upgrade',
    user: {
      name: 'Charlie Davis'
    }
  },
  {
    date: new Date('2024-03-20'),
    description:
      'Inspection and certification of electrical systems for a commercial building to meet local safety regulations.',
    skills: [
      'Electrical Inspection',
      'Code Compliance',
      'Documentation & Reporting'
    ],
    title: 'Commercial Electrical Inspection',
    user: {
      name: 'Alex Kim'
    }
  }
]

export const JOB_POSTS_DUMMY: any[] = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    created_at: '2024-12-23T10:15:30Z',
    company_id: '9d5a2f8b-6444-4e60-9a42-6c1c4fbd9e70',
    poster_user_id: 'c91d21a8-1111-4b66-9231-2f4ad04b9098',
    job_title: 'Frontend Developer',
    job_location: 'Remote',
    job_description: 'Develop and maintain frontend applications.',
    position_type: 'Full-time',
    salary_range: '40,000 - 60,000 USD',
    key_responsibilities:
      'Build UI components, collaborate with design teams, ensure responsiveness.',
    qualifications:
      '3+ years of experience with React, knowledge of TypeScript, understanding of CSS.',
    job_description_html: '<p>Develop and maintain frontend applications.</p>',
    qualifications_html:
      '<ul><li>3+ years of experience with React</li><li>Knowledge of TypeScript</li><li>Understanding of CSS</li></ul>',
    skill_tags: [
      {
        is_general: true,
        skill_name: 'React'
      }
    ]
  },
  {
    id: 'd3124e1b-9e34-4d61-a345-8a0e2c7e229b',
    created_at: '2024-12-22T08:45:00Z',
    company_id: '3a8b3f91-f222-47e4-ae53-453d0e5b6711',
    poster_user_id: 'ab23d7a9-4c65-485b-8a56-c47f1a5f2b32',
    job_title: 'Backend Developer',
    job_location: 'New York, USA',
    job_description: 'Develop and maintain backend services and APIs.',
    position_type: 'Part-time',
    salary_range: '30,000 - 50,000 USD',
    key_responsibilities:
      'Develop APIs, maintain databases, ensure backend scalability.',
    qualifications:
      'Proficiency in Node.js, experience with MongoDB, understanding of RESTful APIs.',
    job_description_html:
      '<p>Develop and maintain backend services and APIs.</p>',
    qualifications_html:
      '<ul><li>Proficiency in Node.js</li><li>Experience with MongoDB</li><li>Understanding of RESTful APIs</li></ul>',
    skill_tags: [
      {
        is_general: true,
        skill_name: 'React'
      }
    ]
  },
  {
    id: 'e8172e23-abc2-4b66-9b83-7e3c2f8e671a',
    created_at: '2024-12-21T14:20:15Z',
    company_id: '6c2a8f83-e322-4c43-bd53-7d2c5e5d9f67',
    poster_user_id: 'fe21d9c8-9112-4d87-8321-9a3e3c5f8d42',
    job_title: 'UI/UX Designer',
    job_location: 'San Francisco, USA',
    job_description: 'Design user interfaces and improve user experiences.',
    position_type: 'Contract',
    salary_range: '50,000 - 70,000 USD',
    key_responsibilities:
      'Create wireframes, design prototypes, collaborate with developers.',
    qualifications:
      'Experience with Figma, knowledge of HTML/CSS, strong design portfolio.',
    job_description_html:
      '<p>Design user interfaces and improve user experiences.</p>',
    qualifications_html:
      '<ul><li>Experience with Figma</li><li>Knowledge of HTML/CSS</li><li>Strong design portfolio</li></ul>',
    skill_tags: [
      {
        is_general: true,
        skill_name: 'React'
      }
    ]
  }
]
