const accordions = document.querySelector('.accordions');

const faqs = [
	{
		question: 'How many team members can I invite?',
		answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto suscipit non aperiam ut minus laborum.',
	},
	{
		question: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
	},
	{
		question: 'How do I reset my password?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde at vitae quis perferendis, quae dicta ab incidunt eum placeat est!',
	},
	{
		question: 'Can I cancel my subscription?',
		answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto suscipit non aperiam ut minus laborum.',
	},
	{
		question: 'Do you provide additional support?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde at vitae quis perferendis, quae dicta ab incidunt eum placeat est!',
	},
];

const Accorion = (question, answer) =>
	`<div
      class="accordion transition-all border-b py-3 border-light-blue"
    >
      <div
        class="question cursor-pointer flex items-center justify-between gap-5"
      >
        <p
          class="text-grayish-blue hover:text-soft-red text-sm md:text-base"
        >
          ${question}
        </p>
        <div>
          <img
            src="./images/icon-arrow-down.svg"
            alt="icon-arrow-down"
          />
        </div>
      </div>
      <p
        class="answer hidden py-2 text-grayish-blue md:text-sm"
      >
        ${answer}
      </p>
   </div>`;

document.addEventListener('DOMContentLoaded', () => {
	// add accordions to the DOM
	accordions.innerHTML = faqs
		.map(faq => Accorion(faq.question, faq.answer))
		.join('');

	const questions = Array.from(accordions.querySelectorAll('.question'));
	questions.map(question => {
		question.addEventListener('click', () => {
			const questionAnswer = question.nextElementSibling;

			accordions.querySelectorAll('.answer').forEach(answer => {
				if (questionAnswer !== answer) {
					answer.classList.add('hidden');
					answer.previousElementSibling.firstElementChild.classList.add(
						'hover:text-soft-red'
					);
					answer.previousElementSibling.classList.remove('font-bold');
				}
			});

			// Toggle the clicked question's answer and adjust its classes
			questionAnswer.classList.toggle('hidden');
			if (questionAnswer.classList.contains('hidden')) {
				question.firstElementChild.classList.add('hover:text-soft-red');
				question.classList.remove('font-bold');
			} else {
				question.firstElementChild.classList.remove(
					'hover:text-soft-red'
				);
				question.classList.add('font-bold');
			}
		});
	});
});
