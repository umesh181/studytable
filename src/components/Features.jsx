// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const features = [
  {
    title: "Unlimited Practice session",
    description: "For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7."
  },
  {
    title: "Personalized Assessment",
    description: "We measure your learning differently. Not just comparing you among your classmates and peers rather, how much you have learnt and how much have your skills in each subject have grown. We crate test based on your learning speed and exam requirement to understand and modify study plan for you. The test are uniquely created for each student improve and advance their respective knowledge."
  },
  {
    title: "Managing students academic life",
    description: "There is more to study than just practicing giving test. To meet the requirement of exam, we need to carefully do the revision, repeatedly align our study plan and to understand students own learning curve. This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So that you focus on learning and worry no more."
  }
];

export function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-12 md:mb-20 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-center"
          >
            <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{feature.title}</h2>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </div>
            <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <img
                src={`Frame-${index + 1}.png`}
                alt={feature.title}
                
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}