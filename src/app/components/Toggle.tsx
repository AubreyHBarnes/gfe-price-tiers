'use client';
import React, { useState } from 'react';
import TierCard from './TierCard';

type ToggleProps = {
    onChange?: (value: 'monthly' | 'annually') => void;
    initial?: 'monthly' | 'annually';
};

const Toggle: React.FC<ToggleProps> = ({ onChange, initial = 'monthly' }) => {
    const [selected, setSelected] = useState<'monthly' | 'annually'>(initial);

    const handleClick = (value: 'monthly' | 'annually') => {
        setSelected(value);
        onChange?.(value);
    };

    return (
        <>
            <div className='flex gap-2'>
                <button
                    type="button"
                    onClick={() => handleClick('monthly')}
                    className={`px-4 py-2 rounded transition-colors focus:outline-none ${
                        selected === 'monthly'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-black'
                    }`}
                    aria-pressed={selected === 'monthly'}
                >
                    Monthly
                </button>
                <button
                    type="button"
                    onClick={() => handleClick('annually')}
                    className={`px-4 py-2 rounded transition-colors focus:outline-none ${
                        selected === 'annually'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-black'
                    }`}
                    aria-pressed={selected === 'annually'}
                >
                    Annually
                </button>
            </div>
                <TierCard
                    plans={
                        selected === 'monthly'
                            ? [
                                  {
                                      name: 'Basic Plan',
                                      price: '$9.99/month',
                                      description: 'Billed Monthly',
                                      features: [
                                          'Standard Quality Images',
                                          'Limited to personal use',
                                          'Email Support',
                                      ],
                                  },
                                  {
                                      name: 'Standard Plan',
                                      price: '$19.99/month',
                                      description: 'Billed Monthly',
                                      features: [
                                          'Expanded library with more diverse abstract images',
                                          'High-resolution images available',
                                          'Suitable for commercial use',
                                          'Priority Email Support',
                                          'Advanced Analytics',
                                      ],
                                  },
                                  {
                                      name: 'Premium Plan',
                                      price: '$29.99/month',
                                      description: 'Billed Monthly',
                                      features: [
                                          'Full access to the entire image library, including exclusive content',
                                          'Highest quality images, including premium collections',
                                          'Commercial and resale rights',
                                          'Dedicated customer support line',
                                          '24/7 support response time',
                                          'Advanced analytics and insights',
                                      ],
                                  },
                              ]
                            : [
                                  {
                                      name: 'Basic Plan',
                                      price: '$6.99/month',
                                      description: 'Billed Annually ($84)',
                                      features: [
                                          'Standard Quality Images',
                                          'Limited to personal use',
                                          'Email Support',
                                      ],
                                  },
                                  {
                                      name: 'Standard Plan',
                                      price: '$15.99/month',
                                      description: 'Billed Annually ($192)',
                                      features: [
                                          'Expanded library with more diverse abstract images',
                                          'High-resolution images available',
                                          'Suitable for commercial use',
                                          'Priority Email Support',
                                          'Advanced Analytics',
                                      ],
                                  },
                                  {
                                      name: 'Premium Plan',
                                      price: '$25.99/month',
                                      description: 'Billed Annually ($312)',
                                      features: [
                                          'Full access to the entire image library, including exclusive content',
                                          'Highest quality images, including premium collections',
                                          'Commercial and resale rights',
                                          'Dedicated customer support line',
                                          '24/7 support response time',
                                          'Advanced analytics and insights',
                                      ],
                                  },
                              ]
                    }
                />
        </>
    );
};

export default Toggle;