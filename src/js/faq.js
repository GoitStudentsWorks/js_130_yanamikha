import Accordion from 'accordion-js';

new Accordion('.faq-list', {
  duration: 300,
  showMultiple: true,
  elementClass: 'faq-item',
  triggerClass: 'faq-question',
  panelClass: 'faq-answer',
  activeClass: 'is-open',
});
