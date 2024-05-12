import CustomButton from '@/components/CustomButton';
import CustomAccordion, {
  Accordion,
} from '@/components/Frontend/CustomAccordion';
import { Pricing } from '@/components/Frontend/Pricing';
import { Check } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Medical Care brings patients to you',
  'Seamless e-prescribing experience',
  'Integrated clinical note-taking',
];
const steps = [
  'List your practice',
  'Create competitive offerings',
  'Start seeing patients',
];
const cards = [
  {
    title: 'Begin your Journey',
    description:
      'Start a new application to join our network of healthcare providers.',
    link: '/',
    linkTitle: 'Start a new application',
  },
  {
    title: 'Resume Application',
    description:
      'Pick up where you left off and complete your onboarding process. Schedule for Physical Approval',
    link: '/',
    linkTitle: 'Continue your Application',
  },
  {
    title: 'Schedule a Call',
    description: 'Arrange a time for a call to finalize your application',
    link: '/',
    linkTitle: 'Schedule a Call',
  },
  {
    title: 'Truck your Progress',
    description:
      'Monitor the status of your application and approvals in real-time.',
    link: '/',
    linkTitle: 'Check Status',
  },
];

const faqs: Accordion[] = [
  {
    question: 'How do I sign up for the Medical Care?',
    answer: (
      <p>
        You can sign up by visiting our website and clicking on{' '}
        <CustomButton
          title="Signup"
          href="/register?role='DOCTOR'"
          className="bg-blue-600 hover:bg-blue-800"
        />
        Follow the instructions to create your account.
      </p>
    ),
  },
  {
    question: 'Can I use Medical Care on multiple devices?',
    answer:
      'Yes, you can access our app from any device with an internet connection. Simply log in using your credentials',
  },
  {
    question: 'How can I reset my password?',
    answer:
      "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the prompts to reset your password.",
  },
  {
    question: 'Do you offer customer support?',
    answer:
      'Yes, we have a dedicated customer support team available to assist you with any questions or issues you may encounter. You can reach out to us via email or through our support portal',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Certainly. You can upgrade or downgrade your plan at any time. Simply log in to your account and navigate to the subscription settings to make changes',
  },
];
const DoctorsPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="">
            <h2 className="text-[1.5rem] leading-[3.5rem] sm:text-[3rem]">
              Build a thriving
              <br />
              <span className="text-blue-600 font-semibold">
                direct-pay
              </span>{' '}
              practice with Medical Care.
            </h2>
            <p className="py-4">
              Welcome to Medical Care, where connecting with patients is made
              easier than ever before. Our platform streamlines the process of
              managing appointments, providing care remotely, and keeping track
              of patient records.
            </p>
            <CustomButton
              title="List your Service"
              href=""
              className="bg-blue-600 hover:bg-blue-800"
            />
            <div className="py-6">
              {features.map((feature, i) => (
                <p key={i} className="flex items-center">
                  <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1170}
            height={848}
            className=""
            alt=""
          />
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1170}
            height={848}
            className="hidden md:block"
            alt=""
          />
          <div className="">
            <h2 className="text-2xl sm:text-3xl">
              Join Medical Care to increase your{' '}
              <span className="text-blue-600 font-semibold">revenue</span>{' '}
              today.
            </h2>
            {/* <div className="py-6">
              {steps.map((step, i) => (
                <p key={i} className="flex items-center">
                  <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                  {step}
                </p>
              ))}
            </div> */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {cards.map((card) => (
                <div
                  key={card.link}
                  className="bg-blue-900 p-4 rounded-lg shadow-2xl"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-xs py-3">
                    {card.description}
                  </p>
                  <CustomButton
                    title={card.linkTitle}
                    href={card.link}
                    className="bg-blue-600 hover:bg-blue-800 w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Pricing />
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <CustomAccordion FAQS={faqs} />
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
