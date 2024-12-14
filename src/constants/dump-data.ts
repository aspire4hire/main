import { JobPostingProps } from '@/components/Feed/JobPosting/JobPosting.types'

export const JOBS_DUMMY: JobPostingProps[] = [
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
