import Image from 'next/image';

export default function Howworks() {
    const header = "How Does it Works?";
    const para = "Your one stop solution for all solar energy needs.";
    
    const steps = [
        {
            number: "01",
            title: "Our recommendations, your decision",
            description: "Find the top best solar company in United States in no time"
        },
        {
            number: "02", 
            title: "We Share Honest Reviews",
            description: "We showcase genuine reviews from customers to make you aware of the facts about the solar companies."
        },
        {
            number: "03",
            title: "Greatest Advantage: Multiple solar quotes", 
            description: "Get multiple solar quotes within the comfort of your home, then compare prices and easily get the best solar installer for your needs."
        }
    ];

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        How It Works
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {header}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {para}
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
                                <Image
                                    src="/assets/how.svg"
                                    alt="How it works illustration"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Steps Section */}
                    <div className="order-1 lg:order-2">
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-start gap-6 p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-xl">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-200">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid md:grid-cols-3 gap-8 hidden lg:grid">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-2">10,000+</h4>
                        <p className="text-gray-400">Happy Customers</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-2">500+</h4>
                        <p className="text-gray-400">Solar Companies</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-2">$2M+</h4>
                        <p className="text-gray-400">Total Savings</p>
                    </div>
                </div>
            </div>
        </section>
    );
}