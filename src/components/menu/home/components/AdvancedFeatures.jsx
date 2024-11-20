import Component1 from "./advancedFeatures/Component1"
import Component10 from "./advancedFeatures/Component10"
import Component11 from "./advancedFeatures/Component11"
import Component12 from "./advancedFeatures/Component12"
import Component13 from "./advancedFeatures/Component13"
import Component14 from "./advancedFeatures/Component14"
import Component2 from "./advancedFeatures/Component2"
// import Component3 from "./advancedFeatures/Component3"
import Component4 from "./advancedFeatures/Component4"
import Component5 from "./advancedFeatures/Component5"
import Component6 from "./advancedFeatures/Component6"
import Component7 from "./advancedFeatures/Component7"
import Component8 from "./advancedFeatures/Component8"
import Component9 from "./advancedFeatures/Component9"
import DynamicComponent from "./advancedFeatures/DynamicComponent.jsx"

const AdvancedFeatures = () => {

    const components = [
        {
            icon: "fa-solid fa-user-lock",
            title: "Secure Registration & Login",
            description: "Well-designed secure registration and login ensure swift onboarding of users with analytics to learn more about them.",
            features: [
                "Accommodates multiple login methods",
                "User Document Upload – personalization & authentication",
                "Secured with Captcha",
                "Error Validations with adaptive messages"
            ]
        },
        {
            icon: "fa-solid fa-globe",
            title: "Multilingual Application",
            description: "Truly multilingual with support to all constitutionally recognised Indian languages, besides English.",
            features: [
                "Supports Multiple Indian Languages",
                "Supports adding new Language"
            ]
        },
        {
            icon: "fa-solid fa-users",
            title: "Multiple Roles",
            description: "Our learning platform has primarily three user roles: Learner, Instructor, and Admin.",
            features: [
                "Instructor - Develops, oversees, and submits the content to the admin for approval",
                "Learner - Consumes the content in a self-paced manner",
                "Admin - Oversees the overall administration of the platform"
            ]
        },
        {
            icon: "fa-solid fa-clipboard-list",
            title: "Course Structure",
            description: "Well-structured and learner-friendly organization of course content to enable a fruitful learning experience.",
            features: [
                "Parent-Child Hierarchy",
                "Instructor-friendly Content Organizer",
                "Supports Multiple Content Types (Images/Videos/Documents)",
                "Progressive Display of Content Based on User Consumption",
                "Track Content Completion Progress"
            ]
        },
        {
            icon: "fa-solid fa-bullhorn",
            title: "Announcements",
            description: "Enables seamless communication of key announcements by Instructors to the learners.",
            features: [
                "Chronologically sequenced",
                "Transmitted instantly",
                "Multiple variants to suit user needs"
            ]
        },
        {
            icon: "fa-solid fa-comments",
            title: "Discussion Forum",
            description: "Facilitates peer to peer communication and learning.",
            features: [
                "Moderated by Instructors",
                "Displayed as threaded conversations",
                "Facility to capture user likes"
            ]
        },
        {
            icon: "fa-solid fa-star",
            title: "Course Feedback & Review",
            description: "Facilitates instructors to seek course feedback and learners to register their feedback.",
            features: [
                "Standardised Feedback Templates",
                "Moderated View of Learner Feedback",
                "Extensive Feedback Analytics"
            ]
        },
        {
            icon: "fa-solid fa-question-circle",
            title: "Ask the Instructor",
            description: "Enables the learners to post questions to the Course Instructor on a one-to-one mode.",
            features: [
                "Query Management Module",
                "Personalized Communication Between Instructor & Learner"
            ]
        },
        {
            icon: "fa-solid fa-pencil-alt",
            title: "Assignment",
            description: "Organized learner evaluation method to assist the instructor in grading the enrolled learners.",
            features: [
                "Assignment Management by Instructor",
                "Assignment Completion by Learners",
                "Elaborate Evaluation & Grading Features for Instructor"
            ]
        },
        {
            icon: "fa-solid fa-pencil-alt",
            title: "Quiz Creation",
            description: "The built-in assessment module enables Course Instructors to create Quizzes for meaningful assessment of learners’ learning levels. There are numerous features offered.",
            features: [
                "User-friendly Question Editor",
                "Structured Quiz Organizer",
                "Learner and Context-Specific Quiz Assigner"
            ]
        },
        {
            icon: "fa-solid fa-check-circle",
            title: "Quiz Delivery",
            description: "An elaborate quiz delivery module streamlines the assessment process to offer a context-aware, learner-friendly, secure, and transparent evaluation.",
            features: [
                "Serves multiple evaluation processes",
                "Usable as an online Exam Portal",
                "Intuitive and engaging quiz presentation",
                "Elaborate analytics to understand learner performance"
            ]
        },
        {
            icon: "fa-solid fa-book",
            title: "eLibrary",
            description: "Provides a well-organized, catalogued, and searchable digital library of learning resources for instructors and learners alike.",
            features: [
                "Supports multiple content forms",
                "Filter-based search functionality",
                "Structured management of learning resources"
            ]
        },
        {
            icon: "fa-solid fa-cogs",
            title: "Administration & Analytics",
            description: "Features to support efficient administration of the platform with data-driven insights and analytics for improved decision-making.",
            features: [
                "End-to-end platform administration",
                "Intuitive dashboards for easy navigation",
                "Elaborate report generation module"
            ],
            exraClasses: 'col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3'
        }
    ];

    // Not being used
    const bgColors = [
        "from-gray-500 via-gray-450 to-gray-500",  // balanced gray gradient
        "from-blue-500 via-blue-450 to-blue-500",  // medium blue gradient
        "from-teal-500 via-teal-450 to-teal-500",  // medium teal gradient
        "from-indigo-500 via-indigo-450 to-indigo-500",  // rich indigo gradient
        "from-purple-500 via-purple-450 to-purple-500",  // vibrant purple gradient
        "from-green-500 via-green-450 to-green-500",  // balanced green gradient
        "from-blue-500 via-blue-450 to-blue-600",  // deep blue gradient
        "from-pink-500 via-pink-450 to-pink-500",  // medium pink gradient
        "from-gray-500 via-gray-450 to-gray-500",  // neutral gray gradient with depth
        "from-teal-500 via-teal-450 to-teal-600",  // rich teal gradient
        "from-cyan-500 via-cyan-450 to-cyan-500",  // medium cyan gradient
        "from-lime-500 via-lime-450 to-lime-500",  // fresh lime gradient
        "from-orange-500 via-orange-400 to-orange-500"  // warm orange gradient

    ];


    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="pt-10 pb-10 md:px-44 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <div className="relative">
                        {/* Decorative gradient orbs */}
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 delay-1000"></div>

                        {/* Main content */}
                        <div className="relative z-10 px-5">
                            <div className="text-5xl max-md:text-3xl py-3 text-center font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200">
                                Why choose <span className="font-bold">MeghSikshak?</span>
                            </div>

                            <div className="pt-4 text-center text-lg text-blue-100/90">
                                A flexible, one-stop solution for all types of online learning
                            </div>

                            {/* Optional decorative line */}
                            <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    {/* <Component1 /> */}
                    {components.map((singleComponent, singleIndex) => {
                        return <DynamicComponent
                            icon={singleComponent.icon}
                            title={singleComponent.title}
                            description={singleComponent.description}
                            features={singleComponent.features}
                            bgColor={bgColors[singleIndex]}
                            exraClasses={singleComponent?.exraClasses}
                        />
                    })}

                    {/* <Component2 /> */}
                    {/* <Component3 />  Incorrect */}
                    {/* <Component13 /> */}
                    {/* <Component4 /> */}
                    {/* <Component5 /> */}
                    {/* <Component6 /> */}
                    {/* <Component7 /> */}
                    {/* <Component8 /> */}
                    {/* <Component9 /> */}
                    {/* <Component10 /> */}
                    {/* <Component11 /> */}
                    {/* <Component12 /> */}
                    {/* <Component14 /> */}
                </div>
            </div>
        </div>
    )
}

export default AdvancedFeatures