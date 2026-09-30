import Accordion from 'accordion-js';

new Accordion('.faq-list', {
  duration: 300,
  showMultiple: false,
  elementClass: 'faq-item',
  triggerClass: 'faq-question',
  panelClass: 'faq-answer',
  activeClass: 'is-open',
});
