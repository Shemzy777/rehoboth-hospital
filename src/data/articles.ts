import type { Article } from '../types';

export const articles: Article[] = [
  { id: 'a1', slug: 'understanding-blood-pressure', category: 'Heart Health',
    title: 'Understanding Your Blood Pressure Numbers', author: 'Dr. Sarah Williams', date: '2026-06-02', photoSeed: 'article-blood-pressure', src: '/images/rehoboth12.png',
    summary: 'What your systolic and diastolic readings actually mean, and when to be concerned.',
    body: 'Blood pressure is measured in two numbers: systolic pressure, the force on your artery walls when your heart beats, and diastolic pressure, the force between beats. A reading consistently above 130/80 mmHg is generally considered elevated. Regular monitoring, a balanced diet lower in sodium, consistent physical activity, and stress management all play a role in keeping blood pressure in a healthy range. If you have a family history of hypertension, regular screening becomes even more important. Speak with your physician about a monitoring schedule that fits your risk profile.' },
  { id: 'a2', slug: 'prenatal-nutrition-guide', category: "Women's Health",
    title: 'A Practical Guide to Prenatal Nutrition', author: 'Dr. Amina Bello', date: '2026-05-18', photoSeed: 'article-prenatal-nutrition', src: '/images/rehoboth20.png',
    summary: 'Simple, evidence-based nutrition guidance for each trimester of pregnancy.',
    body: 'Good nutrition during pregnancy supports both maternal health and foetal development. Folate, iron, calcium, and protein are especially important, and needs shift across trimesters. Small, frequent meals can help manage nausea in early pregnancy, while adequate hydration and fibre support digestion later on. Prenatal vitamins are recommended alongside — not instead of — a varied diet. Always discuss any dietary changes or supplements with your obstetric care team.' },
  { id: 'a3', slug: 'childhood-immunisation-schedule', category: "Children's Health",
    title: 'Why the Childhood Immunisation Schedule Matters', author: 'Dr. Grace Johnson', date: '2026-05-04', photoSeed: 'article-immunisation', src: '/images/rehoboth21.png',
    summary: 'A look at how routine vaccines protect children and the community around them.',
    body: 'Childhood immunisation protects against diseases that were once leading causes of infant mortality. The recommended schedule is timed to build immunity before a child\'s natural exposure risk increases. Delaying or skipping vaccines does not just affect the individual child — it reduces community-wide protection, known as herd immunity, which is especially important for infants too young to be fully vaccinated. Our paediatric team can help you stay on schedule and address any concerns about specific vaccines.' },
  { id: 'a4', slug: 'balanced-plate-basics', category: 'Nutrition',
    title: 'Balanced Plate Basics for Busy Families', author: 'Hospital Nutrition Team', date: '2026-04-22', photoSeed: 'article-nutrition', src: '/images/rehoboth22.png',
    summary: 'A simple framework for building healthier meals without complicated meal plans.',
    body: 'A balanced plate does not require complicated tracking. Aim for roughly half vegetables and fruit, a quarter lean protein, and a quarter whole grains or starchy vegetables. Preparing proteins and grains in batches at the start of the week can make weeknight meals faster without sacrificing nutrition. Small, sustainable changes — like swapping refined grains for whole grains — tend to stick better than dramatic overhauls.' },
  { id: 'a5', slug: 'annual-checkup-guide', category: 'Preventive Care',
    title: 'What to Expect at Your Annual Check-Up', author: 'Dr. Blessing Nwachukwu', date: '2026-04-10', photoSeed: 'article-checkup', src: '/images/rehoboth23.png',
    summary: 'A walkthrough of what a routine annual physical typically covers, and why it matters.',
    body: 'An annual check-up typically includes a review of your medical history, vital signs, and age-appropriate screening tests. It is also a chance to discuss lifestyle factors like diet, exercise, sleep, and stress with your physician. Many chronic conditions, including hypertension and diabetes, show no early symptoms — routine screening is often how they are first identified, when they are most manageable.' },
  { id: 'a6', slug: 'managing-everyday-stress', category: 'Mental Wellness',
    title: 'Practical Ways to Manage Everyday Stress', author: 'Hospital Wellness Team', date: '2026-03-28', photoSeed: 'article-stress', src: '/images/rehoboth24.png',
    summary: 'Grounded, realistic strategies for managing stress in daily life.',
    body: 'Chronic stress affects sleep, digestion, and cardiovascular health, not just mood. Practical strategies include regular physical activity, consistent sleep schedules, and deliberately scheduling downtime rather than waiting for it to appear. Talking to a professional is appropriate when stress begins to interfere with daily functioning, relationships, or work — it is a sign of self-awareness, not weakness.' },
  { id: 'a7', slug: 'hospital-expands-radiology', category: 'Medical News',
    title: 'Rehoboth Expands Radiology Diagnostic Capacity', author: 'Hospital Communications', date: '2026-03-12', photoSeed: 'article-radiology-news', src: '/images/rehoboth15.png',
    summary: 'An update on new diagnostic imaging capacity now available at the hospital.',
    body: 'Rehoboth Hospital has expanded its radiology department to reduce wait times for imaging appointments and support faster diagnosis across departments. The expansion adds capacity for CT and ultrasound scanning, alongside continued investment in experienced radiography staff. Patients can now expect shorter scheduling windows for both routine and urgent imaging referrals.' },
  { id: 'a8', slug: 'building-a-sustainable-exercise-habit', category: 'Healthy Living',
    title: 'Building an Exercise Habit That Actually Sticks', author: 'Hospital Physiotherapy Team', date: '2026-02-20', photoSeed: 'article-exercise', src: '/images/rehoboth25.png',
    summary: 'Why consistency matters more than intensity when starting a new routine.',
    body: 'The most effective exercise routine is the one you will actually maintain. Starting with shorter, manageable sessions and gradually increasing duration or intensity tends to build a lasting habit more reliably than an ambitious plan abandoned after two weeks. Pairing activity with an existing routine, like a daily walk after dinner, helps it become automatic. If you have an existing health condition, speak with your physician before starting a new exercise programme.' },
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const articleCategories = Array.from(new Set(articles.map((a) => a.category)));
