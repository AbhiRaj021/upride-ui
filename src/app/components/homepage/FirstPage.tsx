import { Minus, Plus, Check, ChevronDown, ArrowRight } from "lucide-react";

const FirstPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
                {/* Header */}
                <div className="text-center pt-8 pb-4 px-2">
                    <p className="text-red-500 text-base sm:text-lg font-extrabold mb-2">SERVICES</p>
                    <h4 className="text-[20px] sm:text-[24px] font-bold text-black leading-[27.4px] text-center mb-4">
                        Start Your Two-Wheeler Training with Ease!
                    </h4>
                    <p className="text-black text-md leading-relaxed px-2 sm:px-4">
                        Get on the road with confidence by choosing the perfect training options tailored to your needs. Follow these simple steps to customize your learning journey and master two-wheeler riding effortlessly.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative bg-white">
                    <div className="relative mx-auto max-w-full sm:max-w-full flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 py-4 px-2">

                        {/* Step 01 */}
                        <div className="text-center w-auto sm:w-auto relative after:content-[''] after:block after:h-[2px] after:bg-gray-200 after:w-full sm:after:hidden">
                            <p className="text-gray-500 text-sm sm:text-md font-medium pb-2">
                                Step 01 - Pick Your Perfect Ride
                            </p>
                        </div>

                        {/* Step 02 */}
                        <div className="text-center w-auto sm:w-auto relative after:content-[''] after:block after:h-[2px] after:bg-red-500 after:w-full sm:after:w-[190px] sm:after:mx-auto">
                            <p className="text-black text-sm sm:text-md font-bold pb-2">
                                Step 02 - Choose Course
                            </p>
                        </div>
                    </div>
                </div>


                {/* Main Content */}
                <div className="bg-white rounded-b-3xl p-4">
                    <div className="bg-[#F2EAEA] rounded-3xl px-4 sm:px-6 py-6">
                        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#424242] leading-[26px] text-center mb-6">
                            Choose Your Perfect Course
                        </h2>

                        {/* Beginner Blast */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium text-gray-900">Beginner Blast - </span>
                                        <span className="font-bold text-gray-900">10 Sessions to Mastery</span>
                                    </div>
                                </div>
                                <Minus className="w-5 h-5 text-gray-600" />
                            </div>

                            {/* Sub-options */}
                            <div className="mt-3 space-y-2">
                                {[1, 2, 3].map((day, i) => (
                                    <div
                                        key={i}
                                        className={`bg-gradient-to-r ${day === 2 ? "from-[#E73131] to-[#FFA8A8]" : "from-[#FF8D8D] to-[#FFC1C1]"} rounded-xl p-4 flex items-center justify-between`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-white text-xs font-bold px-3 py-1 border border-white rounded-full whitespace-nowrap">DAY {day}</span>
                                            <span className="text-white text-sm">Getting in Gear — Mastering the Basics</span>
                                        </div>
                                        <ChevronDown className="w-5 h-5 text-white" />
                                    </div>
                                ))}
                            </div>

                            <button className="text-red-500 text-sm font-medium mt-3 flex items-center gap-1">
                                View More <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Advanced Ace */}
                        <div className="mb-4 border-t border-gray-300 pt-4">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-red-300 rounded-full"></div>
                                    <div className="text-sm">
                                        <span className="font-medium text-gray-900">Advanced Ace - </span>
                                        <span className="font-bold text-gray-900">05 Sessions to Perfection</span>
                                    </div>
                                </div>
                                <Plus className="w-5 h-5 text-gray-600" />
                            </div>
                        </div>

                        {/* Customize Course */}
                        <div className="mb-6 border-t border-gray-300 pt-4">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-red-300 rounded-full"></div>
                                    <span className="font-medium text-gray-900 text-sm">Customize Course</span>
                                </div>
                                <Plus className="w-5 h-5 text-gray-600" />
                            </div>
                        </div>

                        {/* Add-Ons */}
                        <div className="mb-3 bg-[#F6DFDF] rounded-xl p-4 text-sm">
                            <h3 className="font-bold text-gray-900">Add-Ons</h3>
                            <div className="mb-2">
                                <span className="text-gray-900">Get Your 2W License — Drive with Confidence!</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="w-5 h-5 border-2 border-red-400 rounded-full"></div>
                                <p className="text-gray-900 font-bold ml-2">₹2,500</p>
                            </div>
                        </div>

                        {/* Offers and Pricing */}
                        <div className="mb-3 bg-[#F6DFDF] rounded-xl p-5 space-y-6 text-sm">
                            {/* Offers Section */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Available Offers</h3>
                                <p className="text-gray-700 mb-3">
                                    Flat 10% Off — Get 10% off on your course fee. Learn more, save more! 🚀
                                </p>

                                <h4 className="font-bold text-gray-900 mb-2">Apply Coupons</h4>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter Coupon"
                                        className="w-full bg-[#F3D4D4] border-0 rounded-full px-4 py-3 text-sm placeholder-gray-500 pr-24"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
                                        Apply <span>→</span>
                                    </button>
                                </div>
                            </div>

                            {/* Program Price Section */}
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-bold text-gray-900 mb-3">Program Price</h3>
                                    <h3 className="font-bold text-gray-900 mb-3">₹8,500</h3>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">GST (18%)</span>
                                        <span className="text-gray-900">₹1,350</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="text-gray-900">₹8,500</span>
                                    </div>
                                    <hr className="my-2 text-gray-300" />
                                    <div className="flex justify-between font-bold text-base">
                                        <span className="text-gray-900">Total</span>
                                        <span className="text-gray-900">₹7,600</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-row sm:flex-row justify-between items-center pt-4 gap-3">
                        <button className="text-red-500 font-medium">Back</button>
                        <button className="text-gray-400 font-medium">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
