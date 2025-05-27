import React from "react";

type Plan = {
    name: string;
    price: string;
    description: string;
    features: string[];
};

type TierCardProps = {
    plans: Plan[];
};

const TierCard: React.FC<TierCardProps> = ({ plans }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 ">
            {plans.map((plan) => (
            <div
                key={plan.name}
                className="border border-gray-200 rounded-lg min-w-[220px] w-full flex flex-col shadow-md text-center bg-white"
            >
                {plan.name === "Standard Plan" ? 
                    <div className="w-full py-3 bg-indigo-50">
                        <span className="inline-block text-blue-800 text-md font-semibold ">
                            Most Popular
                        </span>
                    </div>
                : null}
                <div className="p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold">{plan.name}</h2>
                    <p className={`text-3xl font-bold my-4 ${plan.name === 'Standard Plan' ? 'text-blue-800' : ''}`}>{plan.price}</p>
                    <p className="text-gray-600">{plan.description}</p>
                    <ul className="mt-4 space-y-2 text-left">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="list-marker-check text-gray-700">
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className={` w-full px-4 py-2 border border-neutral-200 shadow-md rounded-lg mt-auto font-semibold transition-colors focus:outline-none ${
                            plan.name === 'Standard Plan' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ' hover:bg-gray-400'
                        }`}
                        >Buy Now</button>
                </div>
            </div>
            ))}
        </div>
    );
};

export default TierCard;