import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Database,
  FileText,
  Shield,
  Zap,
} from 'lucide-react';

export default function AirAsiaProjectPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#d30b1b] to-[#ff0000]">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg"
            alt="AirAsia aircraft"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="bg-white/20 text-white px-4 py-2 text-sm font-semibold">
                FEATURED PROJECT
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              AirAsia Airlines
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-white/90">
              Database Metadata & Data Dictionary System
            </h2>
            <p className="text-xl text-white/80">
              Developing a comprehensive database metadata management system for
              Southeast Asia's leading low-cost airline
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d30b1b] mb-2">
                AirAsia
              </div>
              <p className="text-sm text-[#555]">Client</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#333] mb-2">2025</div>
              <p className="text-sm text-[#555]">Year</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#333] mb-2">8</div>
              <p className="text-sm text-[#555]">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#333] mb-2">16</div>
              <p className="text-sm text-[#555]">Weeks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#333] mb-2">
                Aviation
              </div>
              <p className="text-sm text-[#555]">Industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
                Project Overview
              </h2>
              <p className="text-lg mb-6 text-[#555] leading-relaxed">
                AirAsia, Southeast Asia's largest low-cost carrier, required a
                robust Database Metadata and Data Dictionary system to manage
                their extensive data infrastructure. Steel Horizon Solutions
                assembled a specialized team of database engineers and
                developers to design and implement this critical system.
              </p>
              <p className="text-lg mb-6 text-[#555] leading-relaxed">
                The system provides comprehensive metadata management, enabling
                AirAsia's data teams to efficiently catalog, document, and
                govern their database assets across multiple systems and
                platforms.
              </p>

              <div className="bg-[#f7f3e9] p-6 border-l-4 border-[#d30b1b]">
                <p className="text-[#333] italic">
                  "Steel Horizon Solutions provided us with highly skilled
                  database professionals who understood our complex requirements
                  and delivered a solution that exceeded our expectations."
                </p>
                <p className="text-sm text-[#555] mt-3">
                  — IT Project Manager, AirAsia
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
                alt="Database system development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#333]">
            The Challenge
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Database,
                title: 'Complex Data Infrastructure',
                description:
                  'Managing metadata across multiple database systems, including legacy and modern platforms used throughout AirAsia operations.',
              },
              {
                icon: FileText,
                title: 'Documentation Requirements',
                description:
                  'Need for comprehensive data dictionary to document database schemas, tables, columns, relationships, and business rules.',
              },
              {
                icon: Shield,
                title: 'Data Governance',
                description:
                  'Ensuring data quality, consistency, and compliance across the organization with proper metadata tracking.',
              },
              {
                icon: Users,
                title: 'Multi-Team Collaboration',
                description:
                  'Enabling data engineers, analysts, and business users to access and understand database structures efficiently.',
              },
            ].map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#d30b1b] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333]">
                    {challenge.title}
                  </h3>
                  <p className="text-[#555]">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#333]">
            Our Solution
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-[#333]">
              Team Composition - 8 Specialized Professionals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  role: 'Full Stack Developers',
                  count: 3,
                  responsibilities: [
                    'Frontend & backend development',
                    'API development',
                    'System integration',
                  ],
                },
                {
                  role: 'Solution Architect / Tech Lead',
                  count: 1,
                  responsibilities: [
                    'System architecture design',
                    'Technical leadership',
                    'Technology decisions',
                  ],
                },
                {
                  role: 'QA Engineers',
                  count: 2,
                  responsibilities: [
                    'Manual testing',
                    'Performance testing',
                    'UI automation',
                  ],
                },
                {
                  role: 'Database Engineer',
                  count: 1,
                  responsibilities: [
                    'Database schema design',
                    'Metadata extraction',
                    'Performance optimization',
                  ],
                },
                {
                  role: 'UI/UX Designer',
                  count: 1,
                  responsibilities: [
                    'User interface design',
                    'User experience research',
                    'Design systems',
                  ],
                },
              ].map((team, index) => (
                <div
                  key={index}
                  className="bg-[#f7f3e9] p-6 border border-gray-200 hover:border-[#4d80e4] transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#4d80e4] rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {team.count}
                    </div>
                    <h4 className="text-lg font-bold text-[#333]">
                      {team.role}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {team.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-[#555]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#333]">
              Key Features Delivered
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Automated Metadata Extraction',
                  description:
                    'Automated tools to extract and catalog metadata from various database systems including Oracle, MySQL, PostgreSQL, and MS SQL Server.',
                },
                {
                  title: 'Comprehensive Data Dictionary',
                  description:
                    'Detailed documentation of all database objects including tables, views, columns, data types, constraints, and relationships.',
                },
                {
                  title: 'Lineage Tracking',
                  description:
                    'Data lineage visualization showing the flow of data across different systems and transformations.',
                },
                {
                  title: 'Search & Discovery',
                  description:
                    'Powerful search functionality enabling users to quickly find and understand database assets.',
                },
                {
                  title: 'Business Glossary Integration',
                  description:
                    'Linking technical metadata with business terms and definitions for better understanding.',
                },
                {
                  title: 'Version Control',
                  description:
                    'Tracking changes to database schemas and metadata over time with full version history.',
                },
                {
                  title: 'Access Control',
                  description:
                    'Role-based access control ensuring sensitive metadata is only accessible to authorized personnel.',
                },
                {
                  title: 'API Integration',
                  description:
                    'RESTful APIs for integration with other data management and BI tools in AirAsia ecosystem.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-[#f7f3e9] border border-gray-200"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#4d80e4] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#333] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-[#555] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#333]">
            Technologies & Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React',
              'Typescript',
              'Node.js',
              'Express',
              'PostgreSQL',
              'Docker',
              'REST APIs',
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 text-center border border-gray-200 hover:border-[#4d80e4] transition-colors"
              >
                <p className="font-semibold text-[#333]">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#333]">
            Results & Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-[#f7f3e9] border border-gray-200">
              <TrendingUp className="w-12 h-12 text-[#4d80e4] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#333] mb-2">60%</div>
              <p className="text-[#555]">
                Faster data discovery and understanding
              </p>
            </div>
            <div className="text-center p-8 bg-[#f7f3e9] border border-gray-200">
              <Zap className="w-12 h-12 text-[#4d80e4] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#333] mb-2">100%</div>
              <p className="text-[#555]">
                Database documentation coverage achieved
              </p>
            </div>
            <div className="text-center p-8 bg-[#f7f3e9] border border-gray-200">
              <Users className="w-12 h-12 text-[#4d80e4] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#333] mb-2">200+</div>
              <p className="text-[#555]">
                Data professionals using the system daily
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#d30b1b] to-[#ff0000] p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Business Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Improved data governance and compliance',
                'Reduced time for data onboarding and training',
                'Enhanced collaboration between technical and business teams',
                'Better data quality and consistency',
                'Faster development and analytics delivery',
                'Reduced dependency on tribal knowledge',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#333]">
            Project Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  phase: 'Discovery & Planning',
                  duration: 'Weeks 1-2',
                  items: [
                    'Requirements gathering & analysis',
                    'System architecture design',
                    'Team assembly and onboarding',
                    'Technology stack finalization',
                  ],
                },
                {
                  phase: 'Development Phase 1',
                  duration: 'Weeks 3-7',
                  items: [
                    'Core metadata extraction engine',
                    'Database schema crawler development',
                    'Initial data dictionary structure',
                    'UI/UX design & prototyping',
                  ],
                },
                {
                  phase: 'Development Phase 2',
                  duration: 'Weeks 8-12',
                  items: [
                    'User interface development',
                    'Search and discovery features',
                    'Lineage tracking implementation',
                    'API development & integration',
                  ],
                },
                {
                  phase: 'Testing & Deployment',
                  duration: 'Weeks 13-16',
                  items: [
                    'Manual & automated testing',
                    'Performance & UI automation testing',
                    'User acceptance testing (UAT)',
                    'Production deployment',
                    'User training and documentation',
                  ],
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                    }`}
                  >
                    <div className="bg-white p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-[#4d80e4] mr-2" />
                        <span className="text-sm text-[#555] font-semibold">
                          {milestone.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-[#333]">
                        {milestone.phase}
                      </h3>
                      <ul className="space-y-2">
                        {milestone.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-[#555]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-0">
                    <div className="w-4 h-4 bg-[#4d80e4] rounded-full border-4 border-white shadow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#333] text-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Specialized IT Talent for Your Project?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-[#f7f3e9]/80">
            Like AirAsia, you can leverage our global network of skilled IT
            professionals to deliver your critical projects on time and within
            budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#f7f3e9] text-[#333] hover:bg-white px-8 py-6 text-lg">
                Discuss Your Project
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="outline"
                className="border-[#f7f3e9] text-[#f7f3e9] hover:bg-[#f7f3e9] hover:text-[#333] px-8 py-6 text-lg"
              >
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
