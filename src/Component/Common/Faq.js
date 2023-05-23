import React, { useState } from 'react';

const Faq = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: 'Boi ghor! what is this?',
      answer: 'This is a online book ecommerce website',
    },
    {
      id: 2,
      question: 'What does book bd sell?',
      answer: 'It sells books',
    },
    {
      id: 3,
      question: 'What kind of books we can find here?',
      answer: 'Any kind of books can be found here',
    },
    {
      id: 4,
      question: 'How can I place an order for a book?',
      answer: `You can place an order for a book in our online store by adding the book to your cart and completing the checkout process. You can also place an order by calling our customer service number and providing the book's title, author, and ISBN number.`,
    },
    {
      id: 5,
      question: 'Can I track my order?',
      answer: `Yes, once your order has been processed and shipped, you will receive a tracking number via email. You can use this tracking number to track your order's delivery status.`,
    },
    {
      id: 6,
      question: 'Can I cancel or change an order after it has been placed?',
      answer: ` If your order has not yet been shipped, you may be able to cancel or change it by contacting our customer service department. However, if your order has already been shipped, we cannot cancel or change it.`,
    },
    {
      id: 7,
      question: 'What payment methods do you accept?',
      answer: `We accept major credit cards, PayPal, and Apple Pay for online orders. In-store purchases can be made with cash, credit/debit cards, or store gift cards.`,
    },
    {
      id: 8,
      question: 'What is your return policy?',
      answer: `We accept returns for most items within 30 days of purchase, as long as the item is in its original condition. However, some items, such as eBooks and audiobooks, are not eligible for return. Please see our full return policy for more details.`,
    },
    {
      id: 9,
      question: ' Can I reserve a book for in-store pickup?',
      answer: `Yes, you can reserve a book for in-store pickup by placing an order online and selecting the "in-store pickup" option at checkout. Once your order is ready, you will receive an email notification.`,
    },
    {
      id: 10,
      question: 'Do you offer gift wrapping?',
      answer: `Yes, we offer gift wrapping for a small fee. You can select the gift wrapping option during the checkout process.`,
    },
    {
      id: 11,
      question: 'Can I sell my used books to your store?',
      answer: `Yes, we do buy used books from customers. However, we only accept books that are in good condition and meet our current needs. Please contact our customer service department for more information.`,
    }
  ]);

  const handleCollapse = (index) => {
    const updatedFaqItems = faqItems.map((item, i) => {
      if (index === i) {
        return { ...item, isOpen: !item.isOpen };
      }
      return { ...item, isOpen: false };
    });
    setFaqItems(updatedFaqItems);
  };

  return (
    <div className="items-center">
      <div className="card card-compact bg-base-100 shadow-xl w-full">
        <div className="card-body p-10 space-y-4 mx-10 my-6">
          <h1 className='text-center text-4xl font-extrabold text-primary'>Frequently Asked Questions!</h1>
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              tabIndex={0}
              className={`collapse bg-primary text-primary-content collapse-arrow border bg-base-100 shadow-xl max-w-full my-4 border border-gray-200 rounded-lg
              shadow-[hsl(0,100%,91%)] transform transition duration-500 hover:scale-105 
               hover: drop-shadow-lg hover :shadow-[#FF4157] rounded-box ${item.isOpen ? 'collapse-open' : ''
                }`}
            >
              <div
                className="collapse-title text-xl font-medium"
                onClick={() => handleCollapse(index)}
              >
                {item.question}
              </div>
              {item.isOpen && (
                <div className="collapse-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Faq;
