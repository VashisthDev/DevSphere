import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, as well as PayPal.',
      showAnswer: false
    },
    {
      question: 'What is your refund policy?',
      answer: "If you're not satisfied with our services, please contact us and we'll do our best to make it right. If we can't, we'll offer a full refund within 30 days of your purchase.",
      showAnswer: false
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'It depends on the size and complexity of the project. We\'ll provide an estimated timeline after our initial consultation.',
      showAnswer: false
    }
  ];

  toggleAnswer(item: any) {
    item.showAnswer = !item.showAnswer;
  }
}
